let textbox = document.getElementById("textbox");

        textbox.addEventListener('input', function () {

            var text = this.value;

            let char = text.length;

            document.getElementById("char").innerHTML = char;

            text = text.trim();

            let words = text.split(" ");
            console.log(words)

            let finalList = words.filter(function (elm) {
                return elm != "";

            });

            console.log(finalList);
            document.getElementById("word").innerHTML = finalList.length;

        });
