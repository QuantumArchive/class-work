export default function simpleColor() {
    return {
        restrict: 'A',
        scope: false,
        // $scope -> scope for this directive
        // element -> element on which the directive found
        // attr -> key/value of all attributes on the element
        link($scope, element, attrs){
            // get the name of scope property that
            // we are "binding" to
            const property = attrs.simpleColor;

            //$scope.$watch takes the name of a property,
            //and "watches" it, recalling function when value
            // changes. (calls on initial value as well)
            $scope.$watch(property, value => {
                element.css('color', value);
                // aka like: style="color: red"
            });
        }
    };
}