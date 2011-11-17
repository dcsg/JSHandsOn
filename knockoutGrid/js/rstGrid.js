/**
 * Created By: danielcsgomes <danielcesargomes@gmail.com>
 * Date: 14/11/11
 * Time: 01:16
 */

$(document).ready(function(){
    var gridField;

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
        ,
        sortByName: function (event, _sortOrder, _gridField)
        {


            gridField = _gridField;

            var replace;

            if(_sortOrder == "ASC")
            {
                this.items.sort(sortASC);
                var label = _gridField.replace("Name","");
                replace = $(event.currentTarget).attr("data-bind");
                replace = replace.replace("ASC", "DESC");
                var field = $("th[data-bind*='"+label+"']");
                $(field).attr("data-bind", replace);
            }
            else
            {
                this.items.sort(sortASC);
                var label = _gridField.replace("Name","");
                replace = $(event.currentTarget).attr("data-bind");
                replace = replace.replace("ASC", "DESC");
                var field = $("th[data-bind*='"+label+"']");
                $(field).attr("data-bind", replace);
            }




            /*function (a, b) {
                if(this.sortOrder == "ASC")
                    return a[this.gridField ] > b[this.gridField] ? -1 : 1;
                else
                    return a[this.gridField ] < b[this.gridField] ? -1 : 1;
            });*/
        }
    };

    ko.applyBindings(myModel);



    function sortASC(a,b)
    {
        return a[gridField] < b[gridField] ? -1 : 1;
    }

    function sortDESC(a,b)
    {
        return a[gridField] > b[gridField] ? -1 : 1;
    }

});
