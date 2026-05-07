/* Creates line graph visualization for webpage */
function draw_line_repoActivity(areaID, repoNameWOwner) {
    // load data file, process data, and draw visualization
    var url = ghDataDir + '/intRepos_ActivityCommits.json';
    var files = [url];
    Promise.all(files.map(url => d3.json(url))).then(values => {
        var data = reformatData(values[0]);
        drawGraph(data, areaID);
    });

    var parseTime = d3.timeParse('%Y-%m-%d');
    var formatTime = d3.timeFormat('%Y-%m-%d');

    // Draw graph from data
    function drawGraph(data, areaID) {
        var graphHeader;
        if (repoNameWOwner == null) {
            graphHeader = 'Activity Across All Repos [Default Branches, 1 Year]';
        } else {
            graphHeader = "Activity for '" + repoNameWOwner + "' [Default Branch, 1 Year]";
        }

        if (data.length > 2) { // Minimum of 2 points for visible timeline
            // Removes most recent week from graph to avoid apparent dip in activity
            data.pop();
        }

        data.forEach(function(d) {
            d.date = parseTime(d.date);
            d.value = +d.value;
        });

        var margin = { top: stdMargin.top, right: stdMargin.right, bottom: stdMargin.bottom, left: stdMargin.left * 1.15 },
            element = document.querySelector('.' + areaID).parentNode,
            containerWidth = element.offsetWidth,
            width = containerWidth - margin.left - margin.right,
            height = Math.max(containerWidth / 3, 400)  - margin.top - margin.bottom;
        var dotRadius = stdDotRadius;

        var x = d3
            .scaleTime()
            .clamp(true)
            .domain(
                d3.extent(data, function(d) {
                    return d.date;
                })
            )
            .range([0, width]);

        var y = d3
            .scaleLinear()
            .domain([
                0,
                d3.max(data, function(d) {
                    return d.value == 0 ? 10 : d.value;
                })
            ]) // Force non 0 scale for line visibility
            .range([height, 0])
            .nice();

        var dToday = x.domain()[1];

        function addDateLine(dateString, label) {
            var dateObj = getYearDate(dateString, dToday);
            drawDateLine(dateObj, label, false, chart, x, y, height, valueline);
        }

        var xAxis = d3.axisBottom().scale(x);

        var yAxis = d3.axisLeft().scale(y);

        var area = d3
            .area()
            .x(function(d) {
                return x(d.date);
            })
            .y0(height)
            .y1(function(d) {
                return y(d.value);
            });

        var tip = d3
            .tip()
            .attr('class', 'd3-tip')
            .offset([-10, 0])
            .html(function(d) {
                var repos = ' Commits';
                if (d.value == 1) {
                    repos = ' Commit';
                }
                return '<sub>[Week of ' + formatTime(d.date) + ']</sub>' + '<br>' + d.value + repos;
            });

        var valueline = d3
            .line()
            .x(function(d) {
                return x(d.date);
            })
            .y(function(d) {
                return y(d.value);
            });

        var chart = d3
            .select('.' + areaID)
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

        chart.call(tip);

        // Add the x axis
        chart
            .append('g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0,' + height + ')')
            .call(xAxis);

        // Add the y axis
        chart
            .append('g')
            .attr('class', 'y axis')
            .call(yAxis);

        // Add title
        chart
            .append('text')
            .attr('class', 'graphtitle')
            .attr('x', width / 2)
            .attr('y', 0 - margin.top / 3)
            .attr('text-anchor', 'middle')
            .text(graphHeader);

        // Add y axis label
        chart
            .append('text')
            .attr('class', 'axistitle')
            .attr('transform', 'rotate(-90)')
            .attr('y', 0 - margin.left + margin.left / 4)
            .attr('x', 0 - height / 2)
            .attr('text-anchor', 'middle')
            .text('Commits');

        // Draw fill
        chart
            .append('path')
            .datum(data)
            .attr('class', 'area')
            .attr('d', area);

        // Draw line
        chart
            .append('path')
            .datum(data)
            .attr('class', 'line')
            .attr('d', valueline);

        // Draw date-of-interest reference lines
        var annotationDates = {
            'Supercomputing': '11-18',
            'Thanksgiving': '11-25',
            'Christmas': '12-25'
        };
        for (var annotationName in annotationDates) {
            var annotationDate = annotationDates[annotationName];
            addDateLine(annotationDate, annotationName);
        }

        // Draw dots
        chart
            .selectAll('.circle')
            .data(data)
            .enter()
            .append('circle')
            .attr('class', 'circle')
            .attr('cx', function(d) {
                return x(d.date);
            })
            .attr('cy', function(d) {
                return y(d.value);
            })
            .attr('r', dotRadius)
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide);

        // Angle the axis text
        chart
            .select('.x.axis')
            .selectAll('text')
            .attr('transform', 'rotate(12)')
            .attr('text-anchor', 'start');
    }

    // Turn json obj into desired working data
    function reformatData(obj) {
        // Calculate combined values
        var dataTotals = {};
        var repoCounts = {};
        var repos = repoNameWOwner == null ? Object.keys(obj['data']) : [repoNameWOwner];
        var numReposExpected = repos.length;
        repos.forEach(function(repo) {
            if (obj['data'].hasOwnProperty(repo)) {
                var weeklyNodes = obj['data'][repo];
                for (var i = 0; i < weeklyNodes.length; i++) {
                    var weekstamp = weeklyNodes[i]['week'];
                    var weeklytotal = weeklyNodes[i]['total'];
                    if (!Object.keys(dataTotals).contains(weekstamp)) {
                        dataTotals[weekstamp] = 0;
                        repoCounts[weekstamp] = 0;
                    }
                    dataTotals[weekstamp] += weeklytotal;
                    repoCounts[weekstamp] += 1;
                }
            } else {
                console.log('No activity data recorded for ' + repo + ', using dummy data.');
                // Today
                var end = new Date();
                dataTotals[formatTime(end)] = 0;
                repoCounts[formatTime(end)] = 1;
                // Tomorrow, 1 year ago
                var start = new Date(new Date().getFullYear() - 1, new Date().getMonth(), new Date().getDate() + 1);
                dataTotals[formatTime(start)] = 0;
                repoCounts[formatTime(start)] = 1;
            }
        });

        // Format data for graphing
        var data = [];
        var sortedTimestamps = Object.keys(dataTotals).sort();
        sortedTimestamps.forEach(function(timestamp) {
            var numReposFound = repoCounts[timestamp];
            if (numReposFound == numReposExpected) {
                data.push({ date: timestamp, value: dataTotals[timestamp] });
            } else {
                console.log('Repo count mismatch for activity on ' + timestamp + ': expected ' + numReposExpected + ', found ' + numReposFound);
            }
        });

        return data;
    }

    // Return appropriate date object for a month-day date given the graph's time range
    function getYearDate(monthDayString, dToday) {
        var thisYear = formatTime(dToday).split('-')[0];
        if (d3.min([dToday, parseTime(thisYear + '-' + monthDayString)]) == dToday) {
            var aYear = (parseInt(thisYear) - 1).toString();
            return parseTime(aYear + '-' + monthDayString);
        } else {
            return parseTime(thisYear + '-' + monthDayString);
        }
    }
}
