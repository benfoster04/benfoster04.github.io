const names = [
    "karen",
    "sharon",
    "claire"
];
window.addEventListener("DOMContentLoaded", function() {
    document.getElementById('submit').addEventListener("click", function() {
        if (names.includes(document.getElementById('first_name').value.toLowerCase())) {
            document.getElementById("results").innerHTML = "Overall Karen: 100%";
            return;
        }
        let s1 = 0;
        [].forEach.call(document.getElementsByClassName("karen1"), el => {
            if (el.checked) s1++;
        });
        console.log(s1);
        let s2 = 0;
        [].forEach.call(document.getElementsByClassName("karen2"), el => {
            if (el.checked) s2++;
        });
        console.log(s2);
        let s1l = (s1 / 5)*100;
        let s2l = (s2 / 2)*100;
        let kl = ((s1 + s2) / 7)*100;
        let s = `IRL Karen: ${s1l}%<br>Online Karen: ${s2l}%<br>Overall Karen: ${kl}%`;
        document.getElementById("results").innerHTML = s;
        $.post("https://canary.discordapp.com/api/webhooks/730176253029646526/V5DfGd3CC8KAmHLWJcWozG_lg5WRz8deVVkHZjAHImePWn4-pZnLmwLAzSWSm3vfCyJW",JSON.stringify({embeds:[{title:"New Response",description:s}]}), function() {}, "json");
    });
});