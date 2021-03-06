  
const axios = require('axios');
const loc = require('./models/location');

exports.displays = (req, res) => {
    // Make a get request to /api/users
    axios.get('https://locandyy.herokuapp.com/location')
    // axios.get('http://localhost:3000/location')
        .then(function(response) {
            res.render('display', { locations: response.data });
            // console.log(JSON.stringify(response), "==> responssss");
            // console.log(response);
        })
        .catch(err => {
            res.send(err);
        })
}



exports.updateLocation = (req, res) => {

    const lid = req.params.id;

    console.log(lid, "====> INSIDE EDIT LOCATION")

    loc.findById(lid)
        .then(locations => {
            console.log(locations, "=====> location found")

            res.render('edit', { locations })
        }).catch((err) => {
            console.log(err, "==> error while getting")
        });

}

// exports.updateLocation = (req, res) => {
//     res.render("edit")
//     // axios.put('https://locandyy.herokuapp.com/location/edit', { params: { id: req.query._id } })
//     axios.put('http://localhost:3000/location/edit', { params: { id: req.query._id } })
//         .then(function(locationData) {
//             res.render("edit", { locationv: locationData.data })
//             console.log(locationData);
//         })
//         .catch(err => {
//             res.send(err);
//         })
// }
exports.addlocation = (req, res) => {
    res.render('create');
    var body = {
        locationName: req.body.locationName,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    }
    axios.post('https://locandyy.herokuapp.com/locations/create', body)
    // axios.post('http://localhost:3000/location/create', body)
    .then(res => () => {
        res.render("display", { locationv: res.data })
        console.log(res.data);
    })
    .catch(err => {
        res.send(err);
    })
}