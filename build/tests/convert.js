/*jslint plusplus: false */
/*global doh: false, define: false */

"use strict";

define(['commonJs'], function (commonJs) {
    doh.register(
        "convert",
        [
            function commonJsConvert(t) {
                var source1 = 'require.def("fake", {lol: "you guise"});',
                    source2 = 'require.def("fake", [],\nfunction(){\nreturn{lol : \'you guise\'};\n});';

                t.is(source1, commonJs.convert('fake', 'fake.js', source1));
                t.is(source2, commonJs.convert('fake', 'fake.js', source2));
            }
        ]
    );
    doh.run();
});
