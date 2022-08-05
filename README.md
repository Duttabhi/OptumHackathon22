# phytness, the webapp

## Objective

This is the Optum's Annual Hackathon project. Where I developed the UI in Vue.js.

If user is member, he can login via HSID and view his dashboard. In the dashboard when the user clicks anyone of the cards an POST request is sent to the API. The API predicts the list of activites the user can follow to reduce his disease for 3 months, 6 months, etc.

If the user is not a member he needs to fill up the signup form. Because, atleast one record is required for ML model to predict the model.


## How this helps?

* This helps the insurance company to help the member improve his lifestyle and live healthier life.
* Different associated companies, doctors, wellness program team will get benefitted as the dashboard will suggest enrollment to different courses, programs, etc.

## Video

![demo](https://github.com/Duttabhi/OptumHackathon22/blob/main/video1773135426.mp4)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
