function pingServers() {
    document.getElementById('ping-panel').innerHTML = '';
    const cities = ["London", "Nuremberg", "Sydney", "Los Angeles", "Johannesburg"];
    var ips = ["185.175.139.114", "138.201.233.196", "103.2.196.178", "50.2.78.138", "165.73.241.82"]
    let latencies = {};
    let increment = 0;

    ips.forEach(function(city) {
        var startTime = new Date();
        var xhr = new XMLHttpRequest();
        xhr.open("GET", ips, true);
        xhr.onload = function() {
            var endTime = new Date();
            latencies[increment] = endTime - startTime;
            let place = cities[increment];
            document.getElementById('ping-panel').innerHTML += '<h3>' + place + ': '+ latencies[increment] + 'ms</h3>';
            increment += 1;
        };
        xhr.send();
    });
}
