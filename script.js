var numberOfAnimalButtons = document.querySelectorAll(".bike").length;

for (var i = 0; i <numberOfAnimalButtons; i++) {

    document.querySelectorAll(".bike")[i].addEventListener("click", function() {

        var buttons = this.innerText;

        switch (buttons) {
            case "mtb1":
                var mtb1 = new Audio ("sounds/ginagawaMo.mp3");
                mtb1.play();
                break;
            case "mtb2":
                var mtb2 = new Audio ("sounds/gta.mp3");
                mtb2.play();
                break;
            case "mtb3":
                var mtb3 = new Audio ("sounds/million.mp3");
                mtb3.play();
                break;
            case "mtb4":
                var mtb4 = new Audio ("sounds/omg.mp3");
                mtb4.play();
                break;
            case "mtb5":
                var mtb5 = new Audio ("sounds/pogi.mp3");
                mtb5.play();
                break;
            case "mtb6":
                var mtb6 = new Audio ("sounds/talon.mp3");
                mtb6.play();
                break;
            default:
                break;
        }

});
}
