window.onload = function() {
    navigator.getBattery().then(function(battery) {
        var batteryPercentage = Math.floor(battery.level * 100);
        var robohashURL = "https://robohash.org/" + batteryPercentage + "percent.png";
        var img = document.createElement('img');
        img.src = robohashURL;
        var batteryInfo = document.getElementById('batteryInfo');
        var p = document.createElement('p');
        p.textContent = "Battery Percentage: " + batteryPercentage + "%";
        batteryInfo.appendChild(p);
        batteryInfo.appendChild(img);
    });
};