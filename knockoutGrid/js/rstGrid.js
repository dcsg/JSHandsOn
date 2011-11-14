/**
 * Created By: danielcsgomes <danielcesargomes@gmail.com>
 * Date: 14/11/11
 * Time: 01:16
 */
$(document).ready(function(){
    var myModel = {
        items: ko.observableArray([
            { firstName: "Magda", lastName: "Monteiro", language: "PT"},
            { firstName: "Jorge", lastName: "Fonseca", language: "PT" },
            { firstName: "José", lastName: "Miguel", language: "PT" },
            { firstName: "Manuela", lastName: "Pereira", language: "PT" },
            { firstName: "Laura", lastName: "Rodrigues", language: "PT" },
            { firstName: "Miguel", lastName: "Vasco", language: "PT" },
            { firstName: "Joaquim", lastName: "Lopes", language: "PT" }
        ])
        /*,
        sortByName: function () {
            this.items.sort(function (a, b) {
                return a.name < b.name ? -1 : 1;
            });
        }*/
    };

    ko.applyBindings(myModel);
});
