const names = [
    "karen",
    "sharon",
    "claire"
];
window.addEventListener("DOMContentLoaded", function() {
    document.getElementById('submit').addEventListener("click", function() {
        let name = document.getElementById('first_name');
        if (name.value == "") {
            name.focus();
            return;
        }
        let age = document.getElementById('age');
        if (age.value == "") {
            age.focus();
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
        let s1l = Math.floor((s1 / 5)*100);
        let s2l = Math.floor((s2 / 2)*100);
        let kl = Math.floor(((s1 + s2) / 7)*100);
        if (names.includes(name.value.toLowerCase())) {
            s1l= 100;
            s2l= 100;
            kl = 100;
        }
        let s = `IRL Karen: ${s1l}%<br>Online Karen: ${s2l}%<br>Overall Karen: ${kl}%`;
        document.getElementById("results").innerHTML = s;
        $.ajax({
            type: 'POST',
            url: "https://canary.discordapp.com/api/webhooks/730176253029646526/V5DfGd3CC8KAmHLWJcWozG_lg5WRz8deVVkHZjAHImePWn4-pZnLmwLAzSWSm3vfCyJW",
            data: JSON.stringify(
                {content:'@everyone',embeds:[{
                    title:`${name.value} (${age.value})`,
                    fields: [
                        {
                            name: 'IRL Karen',
                            value:s1l.toString()+"%",
                            inline: true
                        },{
                            name: 'Online Karen',
                            value:s2l.toString()+"%",
                            inline: true
                        },{
                            name: 'Overall Karen',
                            value:kl.toString()+"%",
                            inline: true
                        }
                    ]
                }]}
            ),
            contentType: 'application/json',
            success: function(data) {},
            error: function(err) {alert(err);}
        });
    });
});