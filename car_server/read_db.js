

var d = new Date();
var nosql = require('nosql').load('./database/db.nosql');
// --- WRITE 
 
// nosql.description('car_database.');
// nosql.custom({ key: '412412352345234134' });

// --- READ 
 
// var description = nosql.description();
// var custom = nosql.custom();

var callback = function(err, selected) {

    selected.forEach(function(o) {
		console.log(o["sensordata"]["engine_RPM"]);

    });
};
 
// var map = function(doc) {
//     if (doc.age > 24 && doc.age < 36)
//         return doc;
// };
 
nosql.all(callback);
// nosql.all(map, callback);
// nosql.one(map, function(doc) {});
// nosql.top(5, map, callback);
// nosql.each(function(doc, offset) {});
//  