(
    function () {
        let count = 0;

        document.getElementById("tongmee").onclick = function () {
            count++;
            document.getElementById("write").innerText = count.toString();
        }
    }
    ()
)