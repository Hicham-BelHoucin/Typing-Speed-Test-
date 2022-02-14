/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   main.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hbel-hou <hbel-hou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/02/12 14:01:47 by hbel-hou          #+#    #+#             */
/*   Updated: 2022/02/14 12:06:53 by hbel-hou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

let lvls = {
    "Easy" : 5,
    "Normal" : 3,
    "Hard" : 3
};
function Restart() {
    window.location.reload();
}

let set_time = 0;


let words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
];

let defualtlvl = "Easy";


let start = document.querySelector(".start");

document.getElementsByClassName("total")[0].innerText = words.length - 1;

let num = 5;
document.querySelector(".gotscd").innerText = num;
let the_word;

let score = 0;

function time_left() {
    if (num >= 0)
    {
        document.querySelector(".gotscd").innerText = num;
        num --;
    }
    if (num == 0)
    {
        let input_word = document.querySelector(".input").value;
        console.log(input_word + "?" + the_word);
        if (the_word === input_word)
        {
            document.getElementById("start").click();
            document.querySelector(".input").value = "";
            score++;
            document.getElementsByClassName("got")[0].innerText = score;
            let index = words.indexOf(the_word);
            words.splice(index, 1);
            if (score >= 10 && score < 20)
            {
                document.getElementsByClassName("lvl")[0].innerText = "Normal";
                document.getElementsByClassName("seconds")[0].innerText = 5;
                num = 4;
            }
            else if (score >= 20)
            {
                document.getElementsByClassName("lvl")[0].innerText = "Hard";
                document.getElementsByClassName("seconds")[0].innerText = 3;
                num = 3;
            }
            else
                num = 5;
        }
        else
        {
            document.getElementById("restart").style.display = 'block';
            document.getElementsByClassName("input")[0].style.display = 'none';
            document.getElementsByClassName("upcoming-words")[0].style.display = 'none';
        }
    }
}


function get_rand_num() {
    return (parseInt((Math.random() * words.length - 1) + 1));
}

function add_words() {
    let div;
    div = document.querySelector(".upcoming-words");
    div.innerText = "";
    let div1 = document.createElement("div"); 
    for (let i = 0; i < words.length;i++)
    {
        let p = document.createElement("p");
        p.innerText = words[i];
        div1.appendChild(p);
    }
    div.appendChild(div1);
}

start.addEventListener('click' , function () {
        let div = document.querySelector(".the-word");
        the_word = words[get_rand_num()];
        div.innerText = the_word;
        add_words();
        document.getElementById("start").style.display = 'none';
        score >= 20 ? num = 3 : score < 20 && score >= 10 ? num = 4 : num = 5;
        document.getElementsByClassName("input")[0].focus()
        if (set_time === 0)
            setInterval(time_left, 1000);
        set_time = -1;
});



let input = document.querySelector(".input");


input.addEventListener('input', function () {
    if (this.value)
        this.value = this.value[0].toUpperCase() + this.value.slice(1);
})

