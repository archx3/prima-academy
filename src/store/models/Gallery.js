/* Ensure that names of
 actions, mutations and getters in one module (Model)
 don't conflict with name of any other if you don't want to deal with
 namespace-ing every
 else all them are called at once when used */
// All static images are stored in the public images folder
// eslint-disable-next-line camelcase
const base_dir = '../../public/images/gallery';
const fs = require('fs');

/**
 * Function to iterate over all images in a sub folder in the base directory
 * @param sub_dir
 * @returns {Array}
 */
// eslint-disable-next-line camelcase
function getAllImages (sub_dir) {
  let images = [];

  // eslint-disable-next-line camelcase
  fs.readdir(`${base_dir}/${sub_dir}`, (err, files) => {
    if (err) {
      console.log(err);
    } else {
      files.forEach(file => {
        images.push(
          { link : 'D2470025.JPG',
            title : ''
          },)
      });
    }
  });
  return images;
}

export default {
  namespaced: true, // this ensures that we deal with naming conflicts
  modules   : {}, // nested modules
  state     : {
    gallery : [
      {
        name : 'Excellence Awards',
        dir_name : 'excellence-awards',
        pics : [
          { link : 'D2470025.JPG', title : '' },
          { link : 'D2470028.JPG', title : '' },
          { link : 'D2470072.JPG', title : '' },
          { link : 'D2470109.JPG', title : '' },
          { link : 'D3470009.JPG', title : '' },
          { link : 'D3470025.JPG', title : '' },
          { link : 'D3470027.JPG', title : '' },
          { link : 'D3470071.JPG', title : '' },
          { link : 'D3470102.JPG', title : '' },
          { link : 'D3470104.JPG', title : '' },
          { link : 'D2470109.JPG', title : '' },
          { link : 'DSC_2687.JPG', title : '' },
          { link : 'DSC_2681.JPG', title : '' },
          { link : 'DSC_2712.JPG', title : '' },
          { link : 'DSC_2686.JPG', title : '' },
          { link : 'DSC_2714.JPG', title : '' },
        ],
        thumbnail : 'D3470102.JPG'
      },
      {
        name : 'Excursion',
        dir_name : 'excursion',
        pics : [
          { link : 'IMG_0433.JPG', title : '' },
          { link : 'IMG_0433.JPG', title : '' },
          { link : 'IMG_0433.JPG', title : '' },
        ],
        thumbnail : 'IMG_0433.JPG'
      },
      {
        name : 'Graduation 2018',
        dir_name : 'graduation-2018',
        pics : [
          { link : 'D2460110.JPG', title : '' },
          { link : 'D2460139.JPG', title : '' },
          { link : 'D2460185.JPG', title : '' },
          { link : 'D2470013.JPG', title : '' },
          { link : 'D2470086.JPG', title : '' },
          { link : 'D2460115.JPG', title : '' },
          { link : 'D2460140.JPG', title : '' },
          { link : 'D2460188.JPG', title : '' },
          { link : 'D2470016.JPG', title : '' },
          { link : 'D2460148.JPG', title : '' },
          { link : 'D2460193.JPG', title : '' },
          { link : 'D2470017.JPG', title : '' },
          { link : 'D2460120.JPG', title : '' },
          { link : 'D2460170.JPG', title : '' },
          { link : 'D2460198.JPG', title : '' },
          { link : 'D2470042.JPG', title : '' },
          { link : 'D2460138.JPG', title : '' },
          { link : 'D2460184.JPG', title : '' },
          { link : 'D2460203.JPG', title : '' },
          { link : 'D2470061.JPG', title : '' },
        ],
        thumbnail : 'D2470013.JPG'
      },
      {
        name : 'Multicultural Day Celebration 2018',
        dir_name : 'multicultural-day-celebration-2018',
        pics : [
          { link : 'D3490002.JPG', title : '' },
          { link : 'D3490050.JPG', title : '' },
          { link : 'D3490035.JPG', title : '' },
          { link : 'D3490091.JPG', title : '' },
          { link : 'D3490108.JPG', title : '' },
          { link : 'D3490015.JPG', title : '' },
          { link : 'D3490008.JPG', title : '' },
          { link : 'D3490003.JPG', title : '' },
          { link : 'D3490118.JPG', title : '' },
          { link : 'D3490149.JPG', title : '' },
          { link : 'D3490086.JPG', title : '' },
          { link : 'D3490094.JPG', title : '' },
          { link : 'D3490109.JPG', title : '' },
          { link : 'D3490119.JPG', title : '' },
          { link : 'D3490150.JPG', title : '' },
          { link : 'D3490055.JPG', title : '' },
          { link : 'D3490106.JPG', title : '' },
          { link : 'D3490117.JPG', title : '' },
          { link : 'D3490077.JPG', title : '' },
          { link : 'D3490099.JPG', title : '' },
          { link : 'D3490111.JPG', title : '' },
          { link : 'D3490100.JPG', title : '' },
          { link : 'D3490184.JPG', title : '' },
          { link : 'D3490138.JPG', title : '' },
          { link : 'D3490113.JPG', title : '' },
          { link : 'D3490157.JPG', title : '' },
          { link : 'D3490140.JPG', title : '' },
          { link : 'D3490160.JPG', title : '' },
          { link : 'D3490146.JPG', title : '' },
          { link : 'D3490172.JPG', title : '' },
          { link : 'D3490182.JPG', title : '' },
        ],
        thumbnail : 'D3490150.JPG'
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
  // Do not use for direct update. Call the coresponding mutation
  actions   : {
  },
}
