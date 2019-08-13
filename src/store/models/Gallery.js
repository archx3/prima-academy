/* Ensure that names of
 actions, mutations and getters in one module (Model)
 don't conflict with name of any other if you don't want to deal with
 namespace-ing every
 else all them are called at once when used */
// All static images are stored in the public images folder
// eslint-disable-next-line camelcase
// const base_dir = '../../public/images/gallery';
// const fs = require('fs');

/**
 * Function to iterate over all images in a sub folder in the base directory
 * @param sub_dir
 * @returns {Array}
 */
// eslint-disable-next-line camelcase
// function getAllImages (sub_dir) {
//   let images = [];
//
//   // eslint-disable-next-line camelcase
//   fs.readdir(`${base_dir}/${sub_dir}`, (err, files) => {
//     if (err) {
//       console.log(err);
//     } else {
//       files.forEach(file => {
//         images.push(
//           { link : 'D2470025.JPG',
//             title : ''
//           },)
//       });
//     }
//   });
//   return images;
// }

export default {
  namespaced: true, // this ensures that we deal with naming conflicts
  modules   : {}, // nested modules
  state     : {
    gallery : [
      {
        name : 'Excellence Awards',
        dir_name : 'ea',
        pics : 15,
        thumbnail : '2.jpg'
      }, //
      {
        name : 'Excursion To Elmina',
        dir_name : 'ee',
        pics : 21,
        thumbnail : '1.jpg'
      }, //
      {
        name : 'Graduation 2016',
        dir_name : 'g-2016',
        pics : 42,
        thumbnail : '14.jpg'
      }, //
      {
        name : 'Graduation 2017',
        dir_name : 'g-2017',
        pics : 54,
        thumbnail : '46.jpg'
      }, //
      {
        name : 'Graduation 2018',
        dir_name : 'g-2018',
        pics : 21,
        thumbnail : '8.jpg'
      }, //
      {
        name : 'Clean Up Exercise 2014',
        dir_name : 'cue',
        pics : 84,
        thumbnail : '6.jpg'
      }, //
      {
        name : 'GNAPS Week 2014',
        dir_name : 'gw',
        pics : 42,
        thumbnail : '32.jpg'
      },
      {
        name : 'Educational Visit to Kwame Nkrumah Mausoleum',
        dir_name : 'ev',
        pics : 12,
        thumbnail : '1.jpg'
      },
      {
        name : 'Fun Trip To Legon Botanical Gardens',
        dir_name : 'fttlbg',
        pics : 10,
        thumbnail : '8.jpg'
      },
      {
        name : 'Profession Day 2016',
        dir_name : 'pd',
        pics : 36,
        thumbnail : '2.jpg'
      },
      {
        name : 'Multicultural Day Celebration 2018',
        dir_name : 'mcd',
        pics : 31,
        thumbnail : '20.jpg'
        // pics : getAllImages('multicultural-day-celebration-2018')
      },
    ]
  },
  getters   : {
    all      : (state, getters) => {
      return state.gallery;
    }
  },
  // Use to alter state not for fetching data or complex computations
  mutations : {
  },
  // Do not use for direct update. Call the corresponding mutation
  actions   : {
  },
}
