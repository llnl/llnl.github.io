/* Creates cluster graph visualization for webpage */
function draw_cluster(areaID) {
    // load data file, process data, and draw visualization
    var url = ghDataDir + '/intReposInfo.json';
    var files = [url];
    Promise.all(files.map(url => d3.json(url))).then(values => {
        var data = reformatData(values[0]);
        drawGraph(data, areaID);
    });

    function drawGraph(data, areaID) {
        const margin = { top: stdMargin.top, right: stdMargin.right, bottom: stdMargin.bottom, left: stdMargin.left },
            element = document.querySelector('.' + areaID).parentNode,
            width = Math.min(element.offsetWidth, 500) - margin.left - margin.right,
            height = Math.max(element.offsetWidth / 3, 500)  - margin.top - margin.bottom;
        
        const chart = d3
            .select('.' + areaID)
                .attr('width', width)
                .attr('height', height)
                .append('g');
        
        const pack = (data, starWeight=1, forkWeight=0, contributorWeight=0) => d3.pack()
            .size([width, height])
            .padding(2)
            (d3.hierarchy(data)
                .sum(d => (d.stars * starWeight + d.forks * forkWeight + d.contributors * contributorWeight) / (starWeight + forkWeight + contributorWeight))
                .sort((a, b) => (b.stars * starWeight + b.forks * forkWeight + b.contributors * contributorWeight - (a.stars * starWeight + a.forks * forkWeight + a.contributors * contributorWeight)) / (starWeight + forkWeight + contributorWeight)));

        const nodeGroup = chart.append('g');

        const tip = d3
            .tip()
            .attr('class', 'd3-tip')
            .offset([-10, 0])
            .html(function(d) {
                return `${d.data.owner}/${d.data.name} <br> ${d.data.stars} Stars`;
            });

        chart.call(tip);

        let root = pack({ children: data }, 1, 0, 0);

        function update(s, f, c) {
            root = pack({ children: data }, s, f, c);

            const radiusMax = d3.max(root.children, d => d.r);

            const colors = d3.scalePow()
                .exponent(0.5)
                .domain([0, radiusMax])
                .range(['#FFFFFF', '#3182bd']);

            const node = nodeGroup
                .selectAll('g')
                .data(root.children)
                .join('g')
                    .attr('transform', d => `translate(${d.x},${d.y})`);

            const circles = node.append('circle')
                .attr('fill', d => colors(d.r))
                .attr('stroke-width', 1.5)
                .attr('stroke', d => mostPopularRepositories.some(o => o.name == d.data.name && o.owner == d.data.owner) ? 'black' : 'white')
                .attr('r', d => d.r)
                .on('mouseover', tip.show)
                .on('mouseout', tip.hide);
        }
        
        update(1, 0, 0);

        const label = chart.append('g');

        function updateLabel(data) {
            const labelText = label
                .selectAll('text')
                .data(data)
                .join('text')
                    .attr('text-anchor', 'middle')
                    .attr('font-size', '10px')
                    .attr('dy', '0.35em')
                    .attr('fill-opacity', 1)
                    .attr('radius', d => d.r)
                    .attr('transform', d => `translate(${d.x},${d.y})`)
                    .attr('pointer-events', 'none')
                    .text(d => d.data.name);
            
            labelText.nodes().forEach(node => {
                node.setAttribute('font-size', Math.floor(10 * node.getAttribute('radius') * 2 / (node.getComputedTextLength() + 5)) + 'px')
            });
        }

        updateLabel(root.children);
    }

    // Turn json obj into desired working data
    function reformatData(obj) {
        const data = [];

        for (var repoWOwner in obj['data']) {
            const repoAndOwner = repoWOwner.split('/');
            const repoObj = obj['data'][repoWOwner];
            data.push({ name: repoAndOwner[1], owner: repoAndOwner[0], forks: repoObj['forks']['totalCount'], stars: repoObj['stargazerCount'], contributors: repoObj['mentionableUsers']['totalCount'] });
        }

        return data;
    }
}