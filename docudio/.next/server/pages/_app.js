module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/GRZ":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "0LMq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "makeStore", function() { return /* binding */ _app_makeStore; });
__webpack_require__.d(__webpack_exports__, "wrapper", function() { return /* binding */ wrapper; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("J4zp");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("RIqP");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("lSNA");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./actions/index.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var APP_LOAD = 'APP_LOAD';
var APP_LOAD_SUCCESS = 'APP_LOAD_SUCCESS';
var APP_LOAD_FAILURE = 'APP_LOAD_FAILURE';
var APP_UNLOAD = 'APP_UNLOAD';
var API_ERRORED = 'API_ERRORED';
var ADD_MESSAGE = 'ADD_MESSAGE';
var REMOVE_MESSAGE = 'REMOVE_MESSAGE';
var CLOSE_MESSAGE = 'CLOSE_MESSAGE';
var loadApp = function loadApp() {
  return {
    type: APP_LOAD
  };
};
var actions_enqueueSnackbar = function enqueueSnackbar(notification) {
  return {
    type: ADD_MESSAGE,
    notification: _objectSpread(_objectSpread({}, notification), {}, {
      key: new Date().getTime() + Math.random()
    })
  };
};
var actions_closeSnackbar = function closeSnackbar(key) {
  return {
    type: CLOSE_MESSAGE,
    dismissAll: !key,
    // dismiss all if no key has been defined
    key: key
  };
};
var removeSnackbar = function removeSnackbar(key) {
  return {
    type: REMOVE_MESSAGE,
    key: key
  };
};
// CONCATENATED MODULE: ./reducers/common.js



function common_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function common_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { common_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { common_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var defaultState = {
  appName: 'Docudio',
  notifications: []
};
/* harmony default export */ var common = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case APP_LOAD_SUCCESS:
      return common_objectSpread(common_objectSpread({}, state), {}, {
        appLoaded: true
      });

    case ADD_MESSAGE:
      return common_objectSpread(common_objectSpread({}, state), {}, {
        notifications: [].concat(toConsumableArray_default()(state.notifications), [common_objectSpread(common_objectSpread({}, action.payload), {}, {
          key: new Date().getTime() + Math.random()
        })])
      });

    case REMOVE_MESSAGE:
      return common_objectSpread(common_objectSpread({}, state), {}, {
        notifications: toConsumableArray_default()(state.notifications.filter(function (message) {
          return message.key !== action.key;
        }))
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./actions/auth/index.js
var ACCESS_TOKEN_REQUEST = 'ACCESS_TOKEN_REQUEST';
var ACCESS_TOKEN_SUCCESS = 'ACCESS_TOKEN_SUCCESS';
var ACCESS_TOKEN_FAILURE = 'ACCESS_TOKEN_FAILURE';
var LOGOUT_REQUEST = 'LOGOUT_REQUEST';
var LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
var LOGOUT_FAILURE = 'LOGOUT_FAILURE';
var TRUSTED_CLAIMS_REQUEST = 'TRUSTED_CLAIMS_REQUEST';
var TRUSTED_CLAIMS_SUCCESS = 'TRUSTED_CLAIMS_SUCCESS';
var TRUSTED_CLAIMS_FAILURE = 'TRUSTED_CLAIMS_FAILURE';
var TOKEN_INFO_REQUEST = 'TOKEN_INFO_REQUEST';
var TOKEN_INFO_SUCCESS = 'TOKEN_INFO_SUCCESS';
var AUTH_USER_DETAILS_REQUEST = 'AUTH_USER_DETAILS_REQUEST';
var AUTH_USER_DETAILS_SUCCESS = 'AUTH_USER_DETAILS_SUCCESS';
var USER_TYPE_SEARCH_REQUESTED = 'USER_TYPE_SEARCH_REQUESTED';
var USER_TYPE_SEARCH_SUCCESS = 'USER_TYPE_SEARCH_SUCCESS';
var USER_TYPE_SEARCH_FAILURE = 'USER_TYPE_SEARCH_FAILURE';
var accessTokenRequest = function accessTokenRequest(payload) {
  return {
    type: ACCESS_TOKEN_REQUEST,
    payload: payload
  };
};
var accessTokenSuccess = function accessTokenSuccess(payload) {
  return {
    type: ACCESS_TOKEN_SUCCESS,
    payload: payload
  };
};
var accessTokenFailure = function accessTokenFailure(payload) {
  return {
    type: ACCESS_TOKEN_FAILURE,
    payload: payload
  };
};
var requestLogout = function requestLogout(payload) {
  return {
    type: LOGOUT_REQUEST,
    payload: payload
  };
};
var recieveLogout = function recieveLogout(payload) {
  return {
    type: LOGOUT_SUCCESS,
    payload: payload
  };
};
var logoutFailure = function logoutFailure(payload) {
  return {
    type: LOGOUT_FAILURE,
    payload: payload
  };
};
var auth_getTrustedClaims = function getTrustedClaims() {
  return {
    type: TRUSTED_CLAIMS_REQUEST
  };
};
var auth_getTokenInfo = function getTokenInfo() {
  return {
    type: TOKEN_INFO_REQUEST
  };
};
var getUserType = function getUserType() {
  return {
    type: USER_TYPE_SEARCH_REQUESTED
  };
};
// CONCATENATED MODULE: ./reducers/auth.js


function auth_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function auth_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { auth_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { auth_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var auth_defaultState = {
  isAuthorized: false
};
/* harmony default export */ var auth = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : auth_defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ACCESS_TOKEN_SUCCESS:
      return auth_objectSpread(auth_objectSpread({}, state), {}, {
        isAuthorized: true
      });

    case ACCESS_TOKEN_FAILURE:
      return auth_objectSpread(auth_objectSpread({}, state), {}, {
        message: action.payload,
        isAuthorized: false
      });

    case LOGOUT_FAILURE:
      return auth_objectSpread(auth_objectSpread({}, state), {}, {
        message: action.payload,
        isAuthorized: false
      });

    case LOGOUT_SUCCESS:
      return {};

    case TRUSTED_CLAIMS_SUCCESS:
      return auth_objectSpread(auth_objectSpread({}, state), {}, {
        trustedClaims: action.payload
      });

    case TRUSTED_CLAIMS_FAILURE:
      return auth_objectSpread(auth_objectSpread({}, state), {}, {
        trustedClaims: undefined,
        message: action.payload
      });

    case TOKEN_INFO_SUCCESS:
      return auth_objectSpread(auth_objectSpread({}, state), {}, {
        tokenInfo: action.payload
      });

    case AUTH_USER_DETAILS_SUCCESS:
      return auth_objectSpread(auth_objectSpread({}, state), {}, {
        userDetails: action.payload
      });

    case USER_TYPE_SEARCH_SUCCESS:
      return auth_objectSpread(auth_objectSpread({}, state), {}, {
        isEmployee: action.payload.isValid
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./actions/theme/index.js
var THEME_UPDATE = 'THEME_UPDATE';
var THEME_LIGHT_PREFERRED = 'THEME_LIGHT_PREFERRED';
var THEME_DARK_PREFERRED = 'THEME_DARK_PREFERRED';
var themeUpdate = function themeUpdate(payload) {
  return {
    type: THEME_UPDATE,
    payload: payload
  };
};
// CONCATENATED MODULE: ./reducers/theme/index.js


function theme_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function theme_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { theme_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { theme_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var theme_defaultState = {
  preferred: false
};
/* harmony default export */ var reducers_theme = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : theme_defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case THEME_DARK_PREFERRED:
      return theme_objectSpread(theme_objectSpread({}, state), {}, {
        preferred: true
      });

    case THEME_LIGHT_PREFERRED:
      return theme_objectSpread(theme_objectSpread({}, state), {}, {
        preferred: false
      });

    case THEME_UPDATE:
      return theme_objectSpread(theme_objectSpread({}, state), {}, {
        preferred: action.payload
      });

    default:
      return state;
  }
});
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// CONCATENATED MODULE: ./reducers/reducer.js




/* harmony default export */ var reducer = (Object(external_redux_["combineReducers"])({
  common: common,
  auth: auth,
  theme: reducers_theme
}));
// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: external "crypto"
var external_crypto_ = __webpack_require__("PJMN");
var external_crypto_default = /*#__PURE__*/__webpack_require__.n(external_crypto_);

// CONCATENATED MODULE: ./sagas/utils.js


function base64URLEncode(str) {
  return str.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

function sha256(buffer) {
  return external_crypto_default.a.createHash('sha256').update(buffer).digest();
}

var utils_generatePkceValues = function generatePkceValues() {
  if (getPkceValues()) {
    return getPkceValues();
  }

  var verifier = base64URLEncode(external_crypto_default.a.randomBytes(32));
  var challenge = base64URLEncode(sha256(verifier));
  return {
    verifier: verifier,
    challenge: challenge
  };
};
{
  /*
  export const getPkceValues = () => {
  return sessionStorage.getItem('pkceValues')
    ? JSON.parse(sessionStorage.getItem('pkceValues'))
    : undefined
  }
  export const setPkceValues = pkceValues => {
  sessionStorage.setItem('pkceValues', JSON.stringify(pkceValues))
  }
  export const removePkceValues = () => {
  sessionStorage.removeItem('pkceValues')
  }
  */
}
var getAuthToken = function getAuthToken() {
  return localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')) : undefined;
};
var getDarkModePreference = function getDarkModePreference() {
  return localStorage.getItem('DarkModePreferred') ? localStorage.getItem('DarkModePreferred') : false;
};
var setDarkModePreference = function setDarkModePreference(preference) {
  localStorage.setItem('DarkModePreferred', preference.payload);
};
var setAuthToken = function setAuthToken(token) {
  localStorage.setItem('authToken', JSON.stringify(token));
};
var removeAuthToken = function removeAuthToken() {
  localStorage.removeItem('authToken');
};
var getAuthorizationHeader = function getAuthorizationHeader(accessToken) {
  return {
    Authorization: "Bearer ".concat(accessToken)
  };
};
var decodeTrustedClaims = function decodeTrustedClaims(trustedClaims) {
  var encodedTrustedClaims = trustedClaims.replace('Authorization: TrustedClaims', '').trim();
  var decodedTrustedClaims = Buffer.from(encodedTrustedClaims, 'base64').toString();
  return JSON.parse(decodedTrustedClaims);
};
// CONCATENATED MODULE: ./sagas/agent.js


function agent_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function agent_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { agent_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { agent_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function handleResponse(response) {
  if (response.status === 204) {
    return response.text().then(function (text) {
      return {
        headers: response.headers,
        data: text
      };
    });
  }

  if (response.status === 302) {
    return response.json().then(function (json) {
      return {
        headers: response.headers,
        data: json
      };
    });
  }

  var contentType = response.headers.get('content-type');

  if (contentType && contentType.indexOf('application/json') !== -1) {
    return response.json().then(function (json) {
      if (!response.ok) {
        var error = Object.assign({}, json, {
          status: response.status,
          message: response.statusText
        });
        return Promise.reject(error);
      }

      return {
        headers: response.headers,
        data: json
      };
    });
  }

  return response.text().then(function (text) {
    if (!response.ok) {
      var error = Object.assign({}, {
        status: response.status,
        message: response.statusText,
        data: text
      });
      return Promise.reject(error);
    }

    return {
      headers: response.headers,
      data: text
    };
  });
}

function handleResponsenonJson(response) {
  return response.text().then(function (text) {
    if (!response.ok) {
      var error = Object.assign({}, {
        status: response.status,
        message: response.statusText
      });
      var contentType = response.headers.get('content-type');

      if (contentType && contentType.indexOf('application/json') !== -1) {
        error = agent_objectSpread(agent_objectSpread({}, error), {}, {
          text: text
        });
      }

      return Promise.reject(error);
    }

    return {
      headers: response.headers,
      data: text
    };
  });
}

var requests = {
  del: function del(url, options) {
    return fetch("".concat(url), agent_objectSpread({
      method: 'DELETE'
    }, options)).then(handleResponse);
  },
  get: function get(url, options) {
    return fetch("".concat(url), agent_objectSpread({
      method: 'GET'
    }, options)).then(handleResponse);
  },
  put: function put(url, options, body) {
    return fetch("".concat(url), agent_objectSpread(agent_objectSpread({
      method: 'PUT'
    }, options), {}, {
      body: JSON.stringify(body)
    })).then(handleResponse);
  },
  putprops: function putprops(url, options) {
    return fetch("".concat(url), agent_objectSpread({
      method: 'PUT'
    }, options)).then(handleResponsenonJson);
  },
  post: function post(url, options, body) {
    return fetch("".concat(url), agent_objectSpread(agent_objectSpread({
      method: 'POST'
    }, options), {}, {
      body: JSON.stringify(body)
    })).then(handleResponse);
  },
  postprops: function postprops(url, options) {
    return fetch("".concat(url), agent_objectSpread({
      method: 'POST'
    }, options)).then(handleResponse);
  }
};
// CONCATENATED MODULE: ./sagas/app/auth-agent.js


function auth_agent_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function auth_agent_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { auth_agent_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { auth_agent_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var port = process.env.port === '3001' ? '3000' : '443';
var protocol = process.env.port === '3001' ? 'http' : 'https';
var API_ROOT = protocol + '://' + process.env.hostname + ':' + port;
var ROOT_AUTH_URI = process.env.REACT_APP_APIGW + '/auth/oauth/v2';
var TRUSTED_CLAIMS_URI = process.env.REACT_APP_APIGW + '/auth/oauth/v2/tokeninfo';
var USER_ROOT = '/api/docudio/v1/groups/';
var USER_SEARCH_ROOT = '/api/docudio/v1/ldap/users'; // Used strictly for local development and reverse proxying requests

var portlocal = process.env.port === '3001' ? '3000' : '443';
var NGINX_API_ROOT = process.env.protocol + '//' + process.env.hostname + ':' + portlocal;
var AUTH_PARMS = {
  client_id: '',
  redirect_uri: process.env.protocol + '//' + process.env.hostname + ':' + process.env.port + '/auth',
  code_challenge_method: 'S256',
  response_type: 'code',
  scope: ''
};
var authPostHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded'
};
var Auth = {
  getAccessToken: function getAccessToken(data) {
    return requests.post("".concat(ROOT_AUTH_URI, "/token?client_id=").concat(AUTH_PARMS.client_id, "&redirect_uri=").concat(AUTH_PARMS.redirect_uri, "&code_verifier=").concat(pkceValues.verifier, "&code=").concat(data.code, "&grant_type=authorization_code&state=").concat(JSON.stringify(data.from)), {
      headers: authPostHeaders
    });
  },
  refreshAccessToken: function refreshAccessToken(refreshToken) {
    return requests.post("".concat(ROOT_AUTH_URI, "/token?grant_type=refresh_token&client_id=").concat(AUTH_PARMS.client_id, "&refresh_token=").concat(refreshToken, "&redirect_uri=").concat(AUTH_PARMS.redirect_uri), {
      headers: authPostHeaders
    });
  },
  clearSession: function clearSession(token) {
    return requests.post("".concat(ROOT_AUTH_URI, "/token/revoke?client_id=").concat(AUTH_PARMS.client_id, "&token_type_hint=access_token&token=").concat(token), {
      headers: auth_agent_objectSpread(auth_agent_objectSpread({}, authPostHeaders), {}, {
        Authorization: ''
      }),
      credentials: 'include'
    });
  },
  getTokenInfo: function getTokenInfo(options) {
    return requests.get("".concat(ROOT_AUTH_URI, "/tokenInfo"), options);
  },
  getTrustedClaims: function getTrustedClaims(options) {
    return requests.get("".concat(TRUSTED_CLAIMS_URI), options);
  }
};
/* harmony default export */ var auth_agent = ({
  Auth: Auth
});
// CONCATENATED MODULE: ./sagas/api/users/agent.js

var agent_port = process.env.port === '3001' ? '3000' : '443';
var agent_protocol = process.env.port === '3001' ? 'http' : 'https';
var agent_API_ROOT = agent_protocol + '://' + process.env.hostname + ':' + agent_port;
var agent_ROOT_AUTH_URI = process.env.REACT_APP_APIGW + '/auth/oauth/v2';
var agent_TRUSTED_CLAIMS_URI = process.env.REACT_APP_APIGW + '/auth/oauth/v2/tokeninfo';
var agent_USER_ROOT = '/api/docudio/v1/groups/';
var agent_USER_SEARCH_ROOT = '/api/docudio/v1/ldap/users'; // Used strictly for local development and reverse proxying requests

var agent_portlocal = process.env.port === '3001' ? '3000' : '443';
var agent_NGINX_API_ROOT = process.env.protocol + '//' + process.env.hostname + ':' + agent_portlocal;
var agent_AUTH_PARMS = {
  client_id: '',
  redirect_uri: process.env.protocol + '//' + process.env.hostname + ':' + process.env.port + '/auth',
  code_challenge_method: 'S256',
  response_type: 'code',
  scope: ''
};
var User = {
  getUser: function getUser(options) {
    return requests.get("".concat(agent_NGINX_API_ROOT).concat(agent_USER_ROOT).concat(options.user, "/isValid"), options);
  },
  userSearch: function userSearch(options) {
    return requests.get("".concat(agent_NGINX_API_ROOT).concat(agent_USER_SEARCH_ROOT).concat(options.user), options);
  }
};
/* harmony default export */ var agent = ({
  User: User
});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("QILm");
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// CONCATENATED MODULE: ./sagas/api/api-caller.js




var _marked = /*#__PURE__*/regenerator_default.a.mark(apiCaller);

function api_caller_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function api_caller_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { api_caller_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { api_caller_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function apiCaller(request, _ref) {
  var _ref$headers, headers, rest, token, authorizeHeader, props, response, refreshedToken;

  return regenerator_default.a.wrap(function apiCaller$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _ref$headers = _ref.headers, headers = _ref$headers === void 0 ? {} : _ref$headers, rest = objectWithoutProperties_default()(_ref, ["headers"]);
          _context.next = 3;
          return Object(effects_["call"])(getAuthToken);

        case 3:
          token = _context.sent;
          _context.next = 6;
          return Object(effects_["call"])(getAuthorizationHeader, token.access_token);

        case 6:
          authorizeHeader = _context.sent;
          props = api_caller_objectSpread(api_caller_objectSpread({}, rest), {}, {
            headers: api_caller_objectSpread(api_caller_objectSpread(api_caller_objectSpread({}, headers), authorizeHeader), {}, {
              token: token.access_token
            })
          });
          _context.prev = 8;
          _context.next = 11;
          return Object(effects_["call"])(request, props);

        case 11:
          response = _context.sent;
          return _context.abrupt("return", response || {});

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](8);

          if (!(_context.t0.status === 401)) {
            _context.next = 42;
            break;
          }

          _context.prev = 18;
          _context.next = 21;
          return Object(effects_["call"])(auth_agent.Auth.refreshAccessToken, token.refresh_token);

        case 21:
          refreshedToken = _context.sent;

          if (!refreshedToken) {
            _context.next = 28;
            break;
          }

          _context.next = 25;
          return Object(effects_["call"])(setAuthToken, refreshedToken.data);

        case 25:
          _context.next = 27;
          return Object(effects_["call"])(apiCaller, request, props);

        case 27:
          return _context.abrupt("return", _context.sent);

        case 28:
          _context.next = 40;
          break;

        case 30:
          _context.prev = 30;
          _context.t1 = _context["catch"](18);

          if (!(_context.t1.status === 400)) {
            _context.next = 39;
            break;
          }

          _context.next = 35;
          return Object(effects_["call"])(removeAuthToken);

        case 35:
          _context.next = 37;
          return Object(effects_["put"])({
            type: ACCESS_TOKEN_FAILURE,
            payload: _context.t1.message
          });

        case 37:
          _context.next = 40;
          break;

        case 39:
          throw _context.t1;

        case 40:
          _context.next = 43;
          break;

        case 42:
          throw _context.t0;

        case 43:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[8, 15], [18, 30]]);
}
// CONCATENATED MODULE: ./sagas/app/auth.js


var auth_marked = /*#__PURE__*/regenerator_default.a.mark(fetchAccessToken),
    _marked2 = /*#__PURE__*/regenerator_default.a.mark(auth_clearSession),
    _marked3 = /*#__PURE__*/regenerator_default.a.mark(fetchUserClaims),
    _marked4 = /*#__PURE__*/regenerator_default.a.mark(fetchAuthUserDetails),
    _marked5 = /*#__PURE__*/regenerator_default.a.mark(fetchTokenInfo),
    _marked6 = /*#__PURE__*/regenerator_default.a.mark(fetchEmployeeType);









function fetchAccessToken(action) {
  var payload;
  return regenerator_default.a.wrap(function fetchAccessToken$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(effects_["call"])(auth_agent.Auth.getAccessToken, action.payload);

        case 3:
          payload = _context.sent;
          _context.next = 6;
          return Object(effects_["call"])(setAuthToken, payload.data);

        case 6:
          _context.next = 8;
          return Object(effects_["put"])({
            type: ACCESS_TOKEN_SUCCESS,
            payload: payload.data
          });

        case 8:
          _context.next = 10;
          return Object(effects_["call"])(fetchUserClaims);

        case 10:
          _context.next = 16;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          _context.next = 16;
          return Object(effects_["call"])(app.sendErrorMessage, _context.t0);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, auth_marked, null, [[0, 12]]);
}

function auth_clearSession() {
  var token;
  return regenerator_default.a.wrap(function clearSession$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(effects_["call"])(getAuthToken);

        case 3:
          token = _context2.sent;
          _context2.next = 6;
          return Object(effects_["call"])(auth_agent.Auth.clearSession, token);

        case 6:
          _context2.next = 8;
          return Object(effects_["put"])({
            type: LOGOUT_SUCCESS
          });

        case 8:
          _context2.next = 14;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 14;
          return Object(effects_["call"])(app.sendErrorMessage, _context2.t0);

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 10]]);
}

function fetchUserClaims() {
  var response, trustedClaims;
  return regenerator_default.a.wrap(function fetchUserClaims$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(effects_["call"])(apiCaller, auth_agent.Auth.getTrustedClaims, {
            headers: {}
          });

        case 3:
          response = _context3.sent;
          _context3.next = 6;
          return Object(effects_["call"])(decodeTrustedClaims, response.data);

        case 6:
          trustedClaims = _context3.sent;
          _context3.next = 9;
          return Object(effects_["put"])({
            type: TRUSTED_CLAIMS_SUCCESS,
            payload: trustedClaims
          });

        case 9:
          _context3.next = 17;
          break;

        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 15;
          return Object(effects_["put"])({
            type: TRUSTED_CLAIMS_FAILURE,
            payload: _context3.t0
          });

        case 15:
          _context3.next = 17;
          return Object(effects_["call"])(app.sendErrorMessage, _context3.t0);

        case 17:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 11]]);
}

function fetchAuthUserDetails(action) {
  var payload;
  return regenerator_default.a.wrap(function fetchAuthUserDetails$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(effects_["call"])(apiCaller, agent.User.getUser, {
            headers: {},
            user: action.payload.claims.uid
          });

        case 3:
          payload = _context4.sent;
          _context4.next = 6;
          return Object(effects_["put"])({
            type: AUTH_USER_DETAILS_SUCCESS,
            payload: payload.data
          });

        case 6:
          _context4.next = 12;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          _context4.next = 12;
          return Object(effects_["call"])(app.sendErrorMessage, _context4.t0);

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 8]]);
}

function fetchTokenInfo() {
  var response;
  return regenerator_default.a.wrap(function fetchTokenInfo$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(effects_["call"])(apiCaller, auth_agent.Auth.getTokenInfo, {
            headers: {}
          });

        case 3:
          response = _context5.sent;
          _context5.next = 6;
          return Object(effects_["put"])({
            type: TOKEN_INFO_REQUEST,
            payload: response
          });

        case 6:
          _context5.next = 12;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          _context5.next = 12;
          return Object(effects_["call"])(app.sendErrorMessage, _context5.t0);

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 8]]);
}

function fetchEmployeeType() {
  var payload;
  return regenerator_default.a.wrap(function fetchEmployeeType$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(effects_["call"])(apiCaller, agent.User.fetchEmployeeType, {
            headers: {}
          });

        case 3:
          payload = _context6.sent;
          _context6.next = 6;
          return Object(effects_["put"])({
            type: USER_TYPE_SEARCH_SUCCESS,
            payload: payload.data
          });

        case 6:
          _context6.next = 14;
          break;

        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](0);
          _context6.next = 12;
          return Object(effects_["put"])({
            type: USER_TYPE_SEARCH_FAILURE,
            payload: {}
          });

        case 12:
          _context6.next = 14;
          return Object(effects_["call"])(app.sendErrorMessage, _context6.t0);

        case 14:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 8]]);
}

/* harmony default export */ var app_auth = ({
  fetchUserClaims: fetchUserClaims,
  fetchAccessToken: fetchAccessToken,
  fetchTokenInfo: fetchTokenInfo,
  fetchAuthUserDetails: fetchAuthUserDetails,
  fetchEmployeeType: fetchEmployeeType,
  clearSession: auth_clearSession
});
// CONCATENATED MODULE: ./sagas/app/app.js



function app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { app_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var app_marked = /*#__PURE__*/regenerator_default.a.mark(handleAppLoad),
    app_marked2 = /*#__PURE__*/regenerator_default.a.mark(sendErrorMessage);








function handleAppLoad() {
  var authToken, DarkModePreference;
  return regenerator_default.a.wrap(function handleAppLoad$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(effects_["call"])(getAuthToken);

        case 3:
          authToken = _context.sent;
          _context.next = 6;
          return Object(effects_["call"])(getDarkModePreference);

        case 6:
          DarkModePreference = _context.sent;

          if (!authToken) {
            _context.next = 12;
            break;
          }

          _context.next = 10;
          return Object(effects_["put"])({
            type: ACCESS_TOKEN_SUCCESS
          });

        case 10:
          _context.next = 12;
          return Object(effects_["call"])(app_auth.fetchUserClaims);

        case 12:
          if (!(DarkModePreference === 'true')) {
            _context.next = 17;
            break;
          }

          _context.next = 15;
          return Object(effects_["put"])({
            type: THEME_DARK_PREFERRED,
            payload: DarkModePreference
          });

        case 15:
          _context.next = 20;
          break;

        case 17:
          if (!(DarkModePreference === 'false')) {
            _context.next = 20;
            break;
          }

          _context.next = 20;
          return Object(effects_["put"])({
            type: THEME_LIGHT_PREFERRED,
            payload: DarkModePreference
          });

        case 20:
          _context.next = 22;
          return Object(effects_["put"])({
            type: APP_LOAD_SUCCESS
          });

        case 22:
          _context.next = 28;
          break;

        case 24:
          _context.prev = 24;
          _context.t0 = _context["catch"](0);
          _context.next = 28;
          return Object(effects_["put"])({
            type: APP_LOAD_FAILURE,
            payload: _context.t0
          });

        case 28:
        case "end":
          return _context.stop();
      }
    }
  }, app_marked, null, [[0, 24]]);
}

function sendErrorMessage(e) {
  return regenerator_default.a.wrap(function sendErrorMessage$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(effects_["put"])({
            type: ADD_MESSAGE,
            payload: app_objectSpread(app_objectSpread({}, e), {}, {
              options: {
                variant: 'error'
              }
            })
          });

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, app_marked2);
}

/* harmony default export */ var app = ({
  sendErrorMessage: sendErrorMessage,
  handleAppLoad: handleAppLoad
});
// CONCATENATED MODULE: ./sagas/app/app-saga.js


var app_saga_marked = /*#__PURE__*/regenerator_default.a.mark(watcherSaga);








function watcherSaga() {
  return regenerator_default.a.wrap(function watcherSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(effects_["takeEvery"])(API_ERRORED, app.sendErrorMessage);

        case 2:
          _context.next = 4;
          return Object(effects_["takeLeading"])(APP_LOAD, app.handleAppLoad);

        case 4:
          _context.next = 6;
          return Object(effects_["takeLeading"])(ACCESS_TOKEN_REQUEST, app_auth.fetchAccessToken);

        case 6:
          _context.next = 8;
          return Object(effects_["takeEvery"])(LOGOUT_REQUEST, app_auth.clearSession);

        case 8:
          _context.next = 10;
          return Object(effects_["takeEvery"])(THEME_UPDATE, setDarkModePreference);

        case 10:
          _context.next = 12;
          return Object(effects_["takeLeading"])(TOKEN_INFO_REQUEST, app_auth.fetchTokenInfo);

        case 12:
          _context.next = 14;
          return Object(effects_["takeLeading"])(TRUSTED_CLAIMS_SUCCESS, app_auth.fetchAuthUserDetails);

        case 14:
          _context.next = 16;
          return Object(effects_["takeLeading"])(TRUSTED_CLAIMS_SUCCESS, app_auth.fetchEmployeeType);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, app_saga_marked);
}
// CONCATENATED MODULE: ./sagas/api/signup/agent.js

var signup_agent_port = process.env.port === '3001' ? '3000' : '443';
var signup_agent_protocol = process.env.port === '3001' ? 'http' : 'https';
var signup_agent_API_ROOT = signup_agent_protocol + '://' + process.env.hostname + ':' + signup_agent_port;
var signup_agent_ROOT_AUTH_URI = process.env.REACT_APP_APIGW + '/auth/oauth/v2';
var signup_agent_TRUSTED_CLAIMS_URI = process.env.REACT_APP_APIGW + '/auth/oauth/v2/tokeninfo';
var signup_agent_USER_ROOT = '/api/docudio/v1/';
var signup_agent_USER_SEARCH_ROOT = '/api/docudio/v1/ldap/users'; // Used strictly for local development and reverse proxying requests

var signup_agent_portlocal =  false ? undefined : '443';
var signup_agent_NGINX_API_ROOT = "https" + '://' + "www.docudio.com" + ':' + signup_agent_portlocal;
var signup_agent_AUTH_PARMS = {
  client_id: '',
  redirect_uri: "https" + '//' + process.env.hostname + ':' + process.env.port + '/auth',
  code_challenge_method: 'S256',
  response_type: 'code',
  scope: ''
};
console.log(process.env);
var Signup = {
  submitSignup: function submitSignup(options) {
    return requests.postprops("".concat(signup_agent_NGINX_API_ROOT).concat(signup_agent_USER_ROOT, "signup"), options);
  }
};
/* harmony default export */ var signup_agent = ({
  Signup: Signup
});
// EXTERNAL MODULE: ./actions/signup/index.js
var signup = __webpack_require__("Oc9x");

// CONCATENATED MODULE: ./sagas/api/signup/index.js


var signup_marked = /*#__PURE__*/regenerator_default.a.mark(signup_watcherSaga),
    signup_marked2 = /*#__PURE__*/regenerator_default.a.mark(signup_submitSignup);







function signup_watcherSaga() {
  return regenerator_default.a.wrap(function watcherSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(effects_["takeLeading"])(signup["b" /* SIGNUP_REQUESTED */], signup_submitSignup);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, signup_marked);
}

function signup_submitSignup(action) {
  var payload;
  return regenerator_default.a.wrap(function submitSignup$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(effects_["put"])({
            type: ADD_MESSAGE,
            payload: {
              message: 'Request is being Submitted',
              options: {
                variant: 'info'
              }
            }
          });

        case 3:
          _context2.next = 5;
          return Object(effects_["call"])(apiCaller, signup_agent.Signup.submitSignup, {
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(action.payload)
          });

        case 5:
          payload = _context2.sent;
          _context2.next = 8;
          return Object(effects_["put"])({
            type: ADD_MESSAGE,
            payload: {
              message: 'Request Submitted Successfully!',
              options: {
                variant: 'success'
              }
            }
          });

        case 8:
          _context2.next = 10;
          return Object(effects_["put"])({
            type: signup["c" /* SIGNUP_SUCCESS */],
            payload: payload.data
          });

        case 10:
          _context2.next = 18;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 16;
          return Object(effects_["put"])({
            type: signup["a" /* SIGNUP_FAILURE */],
            payload: {
              message: 'Signup failed, please contact docudio@gmail.com if this persists after refreshing your page'
            }
          });

        case 16:
          _context2.next = 18;
          return Object(effects_["call"])(app.sendErrorMessage, _context2.t0);

        case 18:
        case "end":
          return _context2.stop();
      }
    }
  }, signup_marked2, null, [[0, 12]]);
}
// CONCATENATED MODULE: ./sagas/root-saga.js


var root_saga_marked = /*#__PURE__*/regenerator_default.a.mark(rootSaga);




function rootSaga() {
  return regenerator_default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(effects_["all"])([watcherSaga(), signup_watcherSaga()]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, root_saga_marked);
}
// EXTERNAL MODULE: external "notistack"
var external_notistack_ = __webpack_require__("oF3+");

// EXTERNAL MODULE: ./utils/index.css
var utils = __webpack_require__("zpcA");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./utils/Notifier.js



function Notifier_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Notifier_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Notifier_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Notifier_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var displayed = [];

var Notifier_Notifier = function Notifier() {
  var dispatch = Object(external_react_redux_["useDispatch"])();
  var notifications = Object(external_react_redux_["useSelector"])(function (store) {
    return store.common.notifications || [];
  });

  var _useSnackbar = Object(external_notistack_["useSnackbar"])(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar,
      closeSnackbar = _useSnackbar.closeSnackbar;

  var storeDisplayed = function storeDisplayed(id) {
    displayed = [].concat(toConsumableArray_default()(displayed), [id]);
  };

  var removeDisplayed = function removeDisplayed(id) {
    displayed = toConsumableArray_default()(displayed.filter(function (key) {
      return id !== key;
    }));
  };

  external_react_default.a.useEffect(function () {
    notifications.forEach(function (_ref) {
      var key = _ref.key,
          message = _ref.message,
          _ref$options = _ref.options,
          options = _ref$options === void 0 ? {} : _ref$options,
          _ref$dismissed = _ref.dismissed,
          dismissed = _ref$dismissed === void 0 ? false : _ref$dismissed;

      if (dismissed) {
        // dismiss snackbar using notistack
        closeSnackbar(key);
        return;
      } // do nothing if snackbar is already displayed


      if (displayed.includes(key)) return; // display snackbar using notistack, cant pass a key when trying to prevent duplicates so gotta modify this.

      if (options.preventDuplicate) {
        enqueueSnackbar(message, Notifier_objectSpread(Notifier_objectSpread({}, options), {}, {
          onClose: function onClose(event, reason, myKey) {
            if (options.onClose) {
              options.onClose(event, reason, myKey);
            }
          },
          onExited: function onExited(event, myKey) {
            // removen this snackbar from redux store
            dispatch(removeSnackbar(myKey));
            removeDisplayed(myKey);
          }
        }));
      } else {
        enqueueSnackbar(message, Notifier_objectSpread(Notifier_objectSpread({
          key: key
        }, options), {}, {
          onClose: function onClose(event, reason, myKey) {
            if (options.onClose) {
              options.onClose(event, reason, myKey);
            }
          },
          onExited: function onExited(event, myKey) {
            // removen this snackbar from redux store
            dispatch(removeSnackbar(myKey));
            removeDisplayed(myKey);
          }
        }));
      } // keep track of snackbars that we've displayed


      storeDisplayed(key);
    });
  }, [notifications, closeSnackbar, enqueueSnackbar, dispatch]);
  return null;
};

/* harmony default export */ var utils_Notifier = (Notifier_Notifier);
// EXTERNAL MODULE: ./utils/App.css
var App = __webpack_require__("xDT2");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/Drawer"
var Drawer_ = __webpack_require__("Q01v");
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_);

// EXTERNAL MODULE: external "@material-ui/core/Box"
var Box_ = __webpack_require__("ZkBw");
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);

// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__("4151");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "@material-ui/core/Toolbar"
var Toolbar_ = __webpack_require__("Ms0O");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/Divider"
var Divider_ = __webpack_require__("nybW");
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);

// EXTERNAL MODULE: external "@material-ui/core/Link"
var Link_ = __webpack_require__("MCme");
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: external "@material-ui/icons/Menu"
var Menu_ = __webpack_require__("4D1s");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);

// EXTERNAL MODULE: external "@material-ui/icons/ChevronLeft"
var ChevronLeft_ = __webpack_require__("jQ8v");
var ChevronLeft_default = /*#__PURE__*/__webpack_require__.n(ChevronLeft_);

// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__("0LMq");
var List_default = /*#__PURE__*/__webpack_require__.n(List_);

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__("qt1I");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__("c25J");
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemIcon"
var ListItemIcon_ = __webpack_require__("GLYF");
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemText"
var ListItemText_ = __webpack_require__("W+03");
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);

// EXTERNAL MODULE: external "@material-ui/icons/Public"
var Public_ = __webpack_require__("WfL7");
var Public_default = /*#__PURE__*/__webpack_require__.n(Public_);

// EXTERNAL MODULE: external "@material-ui/icons/Chat"
var Chat_ = __webpack_require__("HWfr");
var Chat_default = /*#__PURE__*/__webpack_require__.n(Chat_);

// EXTERNAL MODULE: external "@material-ui/icons/Home"
var Home_ = __webpack_require__("YZXy");
var Home_default = /*#__PURE__*/__webpack_require__.n(Home_);

// EXTERNAL MODULE: external "@material-ui/icons/Apps"
var Apps_ = __webpack_require__("P+fx");
var Apps_default = /*#__PURE__*/__webpack_require__.n(Apps_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./utils/ListItemLink.js




function ListItemLink(props) {
  var icon = props.icon,
      primary = props.primary,
      to = props.to,
      className = props.className,
      actions = props.actions;
  return /*#__PURE__*/external_react_default.a.createElement(link_default.a, {
    activeClassName: "Mui-selected",
    href: to,
    passHref: true
  }, /*#__PURE__*/external_react_default.a.createElement(core_["ListItem"], {
    button: true,
    className: className
  }, actions ? /*#__PURE__*/external_react_default.a.createElement(core_["ListItemSecondaryAction"], null, actions) : /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, " "), icon ? /*#__PURE__*/external_react_default.a.createElement(core_["ListItemIcon"], null, icon) : null, /*#__PURE__*/external_react_default.a.createElement(core_["ListItemText"], {
    primary: primary
  })));
}
ListItemLink.propTypes = {
  icon: external_prop_types_default.a.element,
  primary: external_prop_types_default.a.string.isRequired,
  to: external_prop_types_default.a.string.isRequired
};
// EXTERNAL MODULE: external "@material-ui/icons/Book"
var Book_ = __webpack_require__("eS5p");
var Book_default = /*#__PURE__*/__webpack_require__.n(Book_);

// EXTERNAL MODULE: external "@material-ui/icons/Description"
var Description_ = __webpack_require__("U4Md");
var Description_default = /*#__PURE__*/__webpack_require__.n(Description_);

// EXTERNAL MODULE: external "@material-ui/icons/GitHub"
var GitHub_ = __webpack_require__("Px2O");
var GitHub_default = /*#__PURE__*/__webpack_require__.n(GitHub_);

// CONCATENATED MODULE: ./utils/PageLinks.js

















var useStyles = Object(styles_["makeStyles"])(function (theme) {
  return {
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      flexGrow: 1
    },
    nested: {
      paddingLeft: theme.spacing(4)
    }
  };
});
function PageLinks() {
  var classes = useStyles();
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/external_react_default.a.createElement(Paper_default.a, {
    elevation: 0
  }, /*#__PURE__*/external_react_default.a.createElement(List_default.a, {
    "aria-label": "navigation"
  }, /*#__PURE__*/external_react_default.a.createElement(ListItemLink, {
    to: "/",
    primary: "Home",
    icon: /*#__PURE__*/external_react_default.a.createElement(Home_default.a, null)
  }), /*#__PURE__*/external_react_default.a.createElement(ListItemLink, {
    to: "/docs",
    primary: "Docs",
    icon: /*#__PURE__*/external_react_default.a.createElement(Book_default.a, null)
  }), /*#__PURE__*/external_react_default.a.createElement(ListItemLink, {
    to: "/reachout",
    primary: "Talk with Us!",
    icon: /*#__PURE__*/external_react_default.a.createElement(Chat_default.a, null)
  }), /*#__PURE__*/external_react_default.a.createElement(CollapsedNavigation, {
    heading: "Resources",
    headingIcon: /*#__PURE__*/external_react_default.a.createElement(Apps_default.a, null),
    routes: resourceRoutes
  }))));
}

function CollapsedNavigation(props) {
  var headingIcon = props.headingIcon,
      heading = props.heading,
      routes = props.routes;

  var _React$useState = external_react_default.a.useState(true),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var classes = useStyles();

  var handleClick = function handleClick() {
    setOpen(!open);
  };

  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(ListItem_default.a, {
    button: true,
    onClick: handleClick
  }, headingIcon ? /*#__PURE__*/external_react_default.a.createElement(ListItemIcon_default.a, null, headingIcon) : null, /*#__PURE__*/external_react_default.a.createElement(ListItemText_default.a, {
    primary: heading
  })), /*#__PURE__*/external_react_default.a.createElement(core_["Collapse"], {
    "in": open,
    timeout: "auto",
    unmountOnExit: true
  }, /*#__PURE__*/external_react_default.a.createElement(List_default.a, {
    component: "div",
    disablePadding: true
  }, routes ? routes.map(function (route, index) {
    return /*#__PURE__*/external_react_default.a.createElement(ListItemLink, {
      key: route.name + index,
      className: classes.nested,
      to: route.path,
      icon: route.icon(),
      primary: route.name
    });
  }) : null)));
}

var resourceRoutes = [{
  path: '/docudio/examples',
  name: 'Examples',
  icon: function icon() {
    return /*#__PURE__*/external_react_default.a.createElement(Public_default.a, null);
  }
}, {
  path: '/blog',
  name: 'Blog',
  icon: function icon() {
    return /*#__PURE__*/external_react_default.a.createElement(Description_default.a, null);
  }
}, {
  path: '/docudio/github',
  name: 'Github',
  icon: function icon() {
    return /*#__PURE__*/external_react_default.a.createElement(GitHub_default.a, null);
  }
}];
// EXTERNAL MODULE: external "@material-ui/icons/Brightness7"
var Brightness7_ = __webpack_require__("HmFH");
var Brightness7_default = /*#__PURE__*/__webpack_require__.n(Brightness7_);

// EXTERNAL MODULE: external "@material-ui/core/Tooltip"
var Tooltip_ = __webpack_require__("vF8F");
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);

// CONCATENATED MODULE: ./utils/DarkModeToggle.js






function DarkModeToggle() {
  var preferred = Object(external_react_redux_["useSelector"])(function (state) {
    return state.theme.preferred;
  });
  var dispatch = Object(external_react_redux_["useDispatch"])();

  var handleChange = function handleChange() {
    dispatch(themeUpdate(!preferred));
  };

  return /*#__PURE__*/external_react_default.a.createElement(Tooltip_default.a, {
    style: {
      "float": 'right',
      'align-items': 'center',
      'justify-content': 'center',
      marginTop: '10px'
    },
    title: "Toggle Dark Mode Preferences",
    interactive: true
  }, /*#__PURE__*/external_react_default.a.createElement(core_["Button"], {
    variant: "contained",
    color: "primary",
    onClick: handleChange,
    disableElevation: true
  }, /*#__PURE__*/external_react_default.a.createElement(Brightness7_default.a, null)));
}
// CONCATENATED MODULE: ./pages/_app.js









 // import apm from '../utils/rum'



















var drawerWidth = 240;
var _app_useStyles = Object(styles_["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex'
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    content: {
      flexGrow: 1
    },
    body: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '90vh'
    },
    copyright: {
      marginTop: 'auto'
    },
    title: {
      flexGrow: 1
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3)
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7)
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar
  };
});

function Copyright() {
  return /*#__PURE__*/external_react_default.a.createElement(Typography_default.a, {
    variant: "body2",
    color: "textSecondary",
    align: "center"
  }, 'Copyright © ', /*#__PURE__*/external_react_default.a.createElement(Link_default.a, {
    color: "inherit",
    href: "https://www.docudio.com/"
  }, "Docudio"), ' ', new Date().getFullYear(), '.');
}

function WrappedApp(props) {
  var classes = _app_useStyles();
  var dispatch = Object(external_react_redux_["useDispatch"])();
  var appLoaded = true;
  Object(external_react_["useEffect"])(function () {
    if (!appLoaded) {
      dispatch(loadApp());
    }
  }, [dispatch, appLoaded]);

  var _React$useState = external_react_default.a.useState(true),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var handleDrawerOpen = function handleDrawerOpen() {
    setOpen(true);
  };

  var handleDrawerClose = function handleDrawerClose() {
    setOpen(false);
  };

  var Component = props.Component,
      pageProps = props.pageProps;
  var ThemePreference = Object(external_react_redux_["useSelector"])(function (state) {
    return state.theme.preferred;
  });
  var theme = external_react_default.a.useMemo(function () {
    return Object(styles_["createMuiTheme"])({
      palette: {
        type: ThemePreference === true ? 'dark' : 'light',
        primary: {
          main: '#000000'
        },
        secondary: {
          main: '#dbdbdb'
        }
      },
      typography: {
        fontFamily: ['Montserrat'].join(',')
      }
    });
  }, [ThemePreference]);
  external_react_default.a.useEffect(function () {
    // Remove the server-side injected CSS.
    var jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  theme.typography.subtitle1 = {
    'font-family': ['Hammersmith One', 'sans-serif']
  };
  theme.typography.subtitle2 = {
    'font-family': ['Hammersmith One', 'sans-serif']
  };
  var notistackRef = /*#__PURE__*/external_react_default.a.createRef();

  var onClickDismiss = function onClickDismiss(key) {
    return function () {
      notistackRef.current.closeSnackbar(key);
    };
  };

  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(head_default.a, null, /*#__PURE__*/external_react_default.a.createElement("title", null, "Docudio"), /*#__PURE__*/external_react_default.a.createElement("script", {
    src: "/env.js"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "minimum-scale=1, initial-scale=1, width=device-width"
  })), /*#__PURE__*/external_react_default.a.createElement(styles_["ThemeProvider"], {
    theme: theme
  }, /*#__PURE__*/external_react_default.a.createElement(external_notistack_["SnackbarProvider"], {
    ref: notistackRef,
    action: function action(key) {
      return /*#__PURE__*/external_react_default.a.createElement(core_["Button"], {
        onClick: onClickDismiss(key)
      }, "Dismiss");
    },
    maxSnack: 3
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/external_react_default.a.createElement(core_["CssBaseline"], null), /*#__PURE__*/external_react_default.a.createElement(AppBar_default.a, {
    position: "fixed",
    className: classes.appBar
  }, /*#__PURE__*/external_react_default.a.createElement(Toolbar_default.a, null, /*#__PURE__*/external_react_default.a.createElement(core_["Grid"], {
    container: true,
    direction: "row",
    spacing: 4
  }, /*#__PURE__*/external_react_default.a.createElement(core_["Grid"], {
    item: true,
    xl: 2,
    sm: 2,
    md: 2,
    lg: 2
  }, /*#__PURE__*/external_react_default.a.createElement(core_["IconButton"], {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: handleDrawerOpen,
    edge: "start",
    className: external_clsx_default()(classes.menuButton, open && classes.hide)
  }, /*#__PURE__*/external_react_default.a.createElement(Menu_default.a, null))), /*#__PURE__*/external_react_default.a.createElement(core_["Grid"], {
    item: true,
    xl: 6,
    sm: 6,
    md: 6,
    lg: 6
  }, /*#__PURE__*/external_react_default.a.createElement(core_["Button"], {
    size: "large",
    className: classes.large,
    startIcon: /*#__PURE__*/external_react_default.a.createElement(core_["Avatar"], {
      className: classes.large,
      src: "/logo2.png"
    }),
    variant: "contained",
    color: "primary"
  }, " ", /*#__PURE__*/external_react_default.a.createElement(Typography_default.a, {
    variant: "h4"
  }, " Docudio "), " "), "         "), /*#__PURE__*/external_react_default.a.createElement(core_["Grid"], {
    item: true,
    xl: 4,
    sm: 4,
    md: 4,
    lg: 4
  }, /*#__PURE__*/external_react_default.a.createElement(DarkModeToggle, null))))), /*#__PURE__*/external_react_default.a.createElement(Drawer_default.a, {
    variant: "persistent",
    open: open,
    classes: {
      paper: classes.drawerPaper
    },
    className: classes.drawer
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: classes.toolbar
  }), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: classes.drawerHeader
  }, /*#__PURE__*/external_react_default.a.createElement(core_["IconButton"], {
    onClick: handleDrawerClose
  }, /*#__PURE__*/external_react_default.a.createElement(ChevronLeft_default.a, null))), /*#__PURE__*/external_react_default.a.createElement(PageLinks, null), /*#__PURE__*/external_react_default.a.createElement(Divider_default.a, null)), /*#__PURE__*/external_react_default.a.createElement("main", {
    className: classes.content
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: classes.toolbar
  }), /*#__PURE__*/external_react_default.a.createElement(Component, pageProps), /*#__PURE__*/external_react_default.a.createElement(utils_Notifier, null), /*#__PURE__*/external_react_default.a.createElement("footer", {
    className: classes.copyright
  }, /*#__PURE__*/external_react_default.a.createElement(Box_default.a, {
    pt: 4
  }, /*#__PURE__*/external_react_default.a.createElement(Copyright, null))))))));
}

var _app_makeStore = function makeStore() {
  // 1: Create the middleware
  var sagaMiddleware = external_redux_saga_default()();
  var storeEnhancers = external_redux_["compose"]; // 2: Add an extra parameter for applying middleware:

  var store = Object(external_redux_["createStore"])(reducer, storeEnhancers(Object(external_redux_["applyMiddleware"])(sagaMiddleware))); // 3: Run your sagas on server

  sagaMiddleware.run(rootSaga); // 4: now return the store:

  return store;
};
var wrapper = Object(external_next_redux_wrapper_["createWrapper"])(_app_makeStore, {
  debug: true
});
/* harmony default export */ var _app = __webpack_exports__["default"] = (wrapper.withRedux(WrappedApp)); // makeStore function that returns a new store for every request
// apm.setInitialPageLoadName('Docudio Landing Page')

/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("zoAU"));

exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  var query = {};
  searchParams.forEach(function (value, key) {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  var result = new URLSearchParams();
  Object.entries(urlQuery).forEach(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (Array.isArray(value)) {
      value.forEach(function (item) {
        return result.append(key, stringifyUrlQueryParam(item));
      });
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target) {
  for (var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    searchParamsList[_key - 1] = arguments[_key];
  }

  searchParamsList.forEach(function (searchParams) {
    Array.from(searchParams.keys()).forEach(function (key) {
      return target["delete"](key);
    });
    searchParams.forEach(function (value, key) {
      return target.append(key, value);
    });
  });
  return target;
}

/***/ }),

/***/ "4151":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "4D1s":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

var _typeof2 = _interopRequireDefault(__webpack_require__("C+bE"));

exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || (0, _typeof2["default"])(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


var slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  var auth = urlObj.auth,
      hostname = urlObj.hostname;
  var protocol = urlObj.protocol || '';
  var pathname = urlObj.pathname || '';
  var hash = urlObj.hash || '';
  var query = urlObj.query || '';
  var host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? "[".concat(hostname, "]") : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && (0, _typeof2["default"])(query) === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  var search = urlObj.search || query && "?".concat(query) || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return "".concat(protocol).concat(host).concat(pathname).concat(search).concat(hash);
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "7eYB":
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "8OQS":
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "Bnag":
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "EbDI":
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "GLYF":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "HWfr":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Chat");

/***/ }),

/***/ "HmFH":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Brightness7");

/***/ }),

/***/ "Ijbi":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__("WkPL");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "J4zp":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__("wTVA");

var iterableToArrayLimit = __webpack_require__("m0LI");

var unsupportedIterableToArray = __webpack_require__("ZhPi");

var nonIterableRest = __webpack_require__("wkBT");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "KckH":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__("7eYB");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "MCme":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "Ms0O":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "Oc9x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SIGNUP_REQUESTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SIGNUP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SIGNUP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return signupRequested; });
var SIGNUP_REQUESTED = 'SIGNUP_REQUESTED';
var SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
var SIGNUP_FAILURE = 'SIGNUP_FAILURE';
var signupRequested = function signupRequested(payload) {
  return {
    type: SIGNUP_REQUESTED,
    payload: payload
  };
};

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "P+fx":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Apps");

/***/ }),

/***/ "PJMN":
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "PqPU":
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "Px2O":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/GitHub");

/***/ }),

/***/ "Q01v":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "QILm":
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__("8OQS");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "RIqP":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__("Ijbi");

var iterableToArray = __webpack_require__("EbDI");

var unsupportedIterableToArray = __webpack_require__("ZhPi");

var nonIterableSpread = __webpack_require__("Bnag");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "U4Md":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Description");

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "W+03":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "WfL7":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Public");

/***/ }),

/***/ "WkPL":
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


var normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  var optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  var repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat: repeat,
    optional: optional
  };
}

function getRouteRegex(normalizedRoute) {
  var segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = segments.map(function (segment) {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      var _parseParameter = parseParameter(segment.slice(1, -1)),
          key = _parseParameter.key,
          optional = _parseParameter.optional,
          repeat = _parseParameter.repeat;

      groups[key] = {
        pos: groupIndex++,
        repeat: repeat,
        optional: optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return "/".concat(escapeRegex(segment));
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    var routeKeyCharCode = 97;
    var routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    var getSafeRouteKey = function getSafeRouteKey() {
      var routeKey = '';

      for (var i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    var routeKeys = {};
    var namedParameterizedRoute = segments.map(function (segment) {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        var _parseParameter2 = parseParameter(segment.slice(1, -1)),
            key = _parseParameter2.key,
            optional = _parseParameter2.optional,
            repeat = _parseParameter2.repeat; // replace any non-word characters since they can break
        // the named regex


        var cleanedKey = key.replace(/\W/g, '');
        var invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? "(?:/(?<".concat(cleanedKey, ">.+?))?") : "/(?<".concat(cleanedKey, ">.+?)") : "/(?<".concat(cleanedKey, ">[^/]+?)");
      } else {
        return "/".concat(escapeRegex(segment));
      }
    }).join('');
    return {
      re: new RegExp("^".concat(parameterizedRoute, "(?:/)?$")),
      groups: groups,
      routeKeys: routeKeys,
      namedRegex: "^".concat(namedParameterizedRoute, "(?:/)?$")
    };
  }

  return {
    re: new RegExp("^".concat(parameterizedRoute, "(?:/)?$")),
    groups: groups
  };
}

/***/ }),

/***/ "YZXy":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Home");

/***/ }),

/***/ "ZhPi":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__("WkPL");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "ZkBw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "c25J":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("zoAU"));

var _typeof2 = _interopRequireDefault(__webpack_require__("C+bE"));

var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var cachedObserver;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners["delete"](el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options)["catch"](function (err) {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  var target = event.currentTarget.target;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  var nodeName = e.currentTarget.nodeName;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow: shallow
  }).then(function (success) {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) { var hasWarned, optionalProps, optionalPropsGuard, requiredProps, requiredPropsGuard, createPropError; }

  var p = props.prefetch !== false;

  var _react$default$useSta = _react["default"].useState(),
      _react$default$useSta2 = (0, _slicedToArray2["default"])(_react$default$useSta, 2),
      childElm = _react$default$useSta2[0],
      setChildElm = _react$default$useSta2[1];

  var router = (0, _router2.useRouter)();
  var pathname = router && router.pathname || '/';

  var _react$default$useMem = _react["default"].useMemo(function () {
    var _ref = (0, _router.resolveHref)(pathname, props.href, true),
        _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
        resolvedHref = _ref2[0],
        resolvedAs = _ref2[1];

    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]),
      href = _react$default$useMem.href,
      as = _react$default$useMem.as;

  _react["default"].useEffect(function () {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      var isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, function () {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  var children = props.children,
      replace = props.replace,
      shallow = props.shallow,
      scroll = props.scroll; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react["default"].createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  var child = _react.Children.only(children);

  var childProps = {
    ref: function ref(el) {
      if (el) setChildElm(el);

      if (child && (0, _typeof2["default"])(child) === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if ((0, _typeof2["default"])(child.ref) === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: function onClick(e) {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = function (e) {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react["default"].cloneElement(child, childProps);
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "dYMV":
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

/***/ }),

/***/ "eS5p":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Book");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__("AroE");

var _slicedToArray2 = _interopRequireDefault2(__webpack_require__("zoAU"));

var _regenerator = _interopRequireDefault2(__webpack_require__("vJKn"));

var _asyncToGenerator2 = _interopRequireDefault2(__webpack_require__("qVT1"));

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__("/GRZ"));

var _createClass2 = _interopRequireDefault2(__webpack_require__("i2R6"));

exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports["default"] = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


var basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : "".concat(prefix).concat(path) : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    var locationOrigin = (0, _utils.getLocationOrigin)();
    var resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  var interpolatedRoute = '';
  var dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  var dynamicGroups = dynamicRegex.groups;
  var dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  var params = Object.keys(dynamicGroups);

  if (!params.every(function (param) {
    var value = dynamicMatches[param] || '';
    var _dynamicGroups$param = dynamicGroups[param],
        repeat = _dynamicGroups$param.repeat,
        optional = _dynamicGroups$param.optional; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    var replaced = "[".concat(repeat ? '...' : '').concat(param, "]");

    if (optional) {
      replaced = "".concat(!value ? '/' : '', "[").concat(replaced, "]");
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters["default"]).join('/') : (0, _escapePathDelimiters["default"])(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params: params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  var filteredQuery = {};
  Object.keys(query).forEach(function (key) {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  var base = new URL(currentPath, 'http://n');
  var urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    var finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    var interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      var query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);

      var _interpolateAs = interpolateAs(finalUrl.pathname, finalUrl.pathname, query),
          result = _interpolateAs.result,
          params = _interpolateAs.params;

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    var resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

var PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

var manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(function (res) {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error("Failed to load static props");
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1)["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  function Router(_pathname, _query, _as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        initialStyleSheets = _ref.initialStyleSheets,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback,
        locale = _ref.locale,
        locales = _ref.locales,
        defaultLocale = _ref.defaultLocale;
    (0, _classCallCheck2["default"])(this, Router);
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = function (e) {
      var state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname2 = _this.pathname,
            query = _this.query;

        _this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(_pathname2),
          query: query
        }), (0, _utils.getURL)());

        return;
      }

      if (!state.__N) {
        return;
      }

      var url = state.url,
          as = state.as,
          options = state.options;

      var _ref2 = (0, _parseRelativeUrl.parseRelativeUrl)(url),
          pathname = _ref2.pathname; // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (_this.isSsr && as === _this.asPath && pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(state)) {
        return;
      }

      _this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && _this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) { var debouncedScrollSave, scrollDebounceTimeout; }
  }

  (0, _createClass2["default"])(Router, [{
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
    * Go back in history
    */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
    * Performs a `pushState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      ;

      var _prepareUrlAs = prepareUrlAs(this, url, as);

      url = _prepareUrlAs.url;
      as = _prepareUrlAs.as;
      return this.change('pushState', url, as, options);
    }
    /**
    * Performs a `replaceState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      ;

      var _prepareUrlAs2 = prepareUrlAs(this, url, as);

      url = _prepareUrlAs2.url;
      as = _prepareUrlAs2.as;
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function () {
      var _change = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(method, url, as, options) {
        var _this2 = this;

        var cleanedAs, pages, _yield$this$pageLoade, rewrites, parsed, _parsed, pathname, query, route, _options$shallow, shallow, resolvedAs, potentialHref, parsedAs, asPathname, routeRegex, routeMatch, shouldInterpolate, interpolatedAs, missingParams, routeInfo, error, props, __N_SSG, __N_SSP, destination, parsedHref, appComp;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (isLocalURL(url)) {
                  _context.next = 3;
                  break;
                }

                window.location.href = url;
                return _context.abrupt("return", false);

              case 3:
                if (!options._h) {
                  this.isSsr = false;
                } // marking route changes as a navigation start entry


                if (_utils.ST) {
                  performance.mark('routeChange');
                }

                if (this._inFlightRoute) {
                  this.abortComponentLoad(this._inFlightRoute);
                }

                as = addLocale(as, this.locale, this.defaultLocale);
                cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
                this._inFlightRoute = as; // If the url change is only related to a hash change
                // We should not proceed. We should only change the state.
                // WARNING: `_h` is an internal option for handing Next.js client-side
                // hydration. Your app should _never_ use this property. It may change at
                // any time without notice.

                if (!(!options._h && this.onlyAHashChange(cleanedAs))) {
                  _context.next = 17;
                  break;
                }

                this.asPath = cleanedAs;
                Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

                this.changeState(method, url, as, options);
                this.scrollToHash(cleanedAs);
                this.notify(this.components[this.route]);
                Router.events.emit('hashChangeComplete', as);
                return _context.abrupt("return", true);

              case 17:
                _context.next = 19;
                return this.pageLoader.getPageList();

              case 19:
                pages = _context.sent;
                _context.next = 22;
                return this.pageLoader.promisedBuildManifest;

              case 22:
                _yield$this$pageLoade = _context.sent;
                rewrites = _yield$this$pageLoade.__rewrites;
                parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
                _parsed = parsed, pathname = _parsed.pathname, query = _parsed.query;
                parsed = this._resolveHref(parsed, pages);

                if (parsed.pathname !== pathname) {
                  pathname = parsed.pathname;
                  url = (0, _utils.formatWithValidation)(parsed);
                } // url and as should always be prefixed with basePath by this
                // point by either next/link or router.push/replace so strip the
                // basePath from the pathname to match the pages dir 1-to-1


                pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
                // (not location.reload() but reload getInitialProps and other Next.js stuffs)
                // We also need to set the method = replaceState always
                // as this should not go into the history (That's how browsers work)
                // We should compare the new asPath to the current asPath, not the url

                if (!this.urlIsNew(cleanedAs)) {
                  method = 'replaceState';
                }

                route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
                _options$shallow = options.shallow, shallow = _options$shallow === void 0 ? false : _options$shallow; // we need to resolve the as value using rewrites for dynamic SSG
                // pages to allow building the data URL correctly

                resolvedAs = as;

                if (false) {}

                resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

                if (!(0, _isDynamic.isDynamicRoute)(route)) {
                  _context.next = 50;
                  break;
                }

                parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
                asPathname = parsedAs.pathname;
                routeRegex = (0, _routeRegex.getRouteRegex)(route);
                routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
                shouldInterpolate = route === asPathname;
                interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

                if (!(!routeMatch || shouldInterpolate && !interpolatedAs.result)) {
                  _context.next = 49;
                  break;
                }

                missingParams = Object.keys(routeRegex.groups).filter(function (param) {
                  return !query[param];
                });

                if (!(missingParams.length > 0)) {
                  _context.next = 47;
                  break;
                }

                if (false) {}

                throw new Error((shouldInterpolate ? "The provided `href` (".concat(url, ") value is missing query values (").concat(missingParams.join(', '), ") to be interpolated properly. ") : "The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ")) + "Read more: https://err.sh/vercel/next.js/".concat(shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'));

              case 47:
                _context.next = 50;
                break;

              case 49:
                if (shouldInterpolate) {
                  as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
                    pathname: interpolatedAs.result,
                    query: omitParmsFromQuery(query, interpolatedAs.params)
                  }));
                } else {
                  // Merge params into `query`, overwriting any specified in search
                  Object.assign(query, routeMatch);
                }

              case 50:
                Router.events.emit('routeChangeStart', as);
                _context.prev = 51;
                _context.next = 54;
                return this.getRouteInfo(route, pathname, query, as, shallow);

              case 54:
                routeInfo = _context.sent;
                error = routeInfo.error, props = routeInfo.props, __N_SSG = routeInfo.__N_SSG, __N_SSP = routeInfo.__N_SSP; // handle redirect on client-transition

                if (!((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT)) {
                  _context.next = 65;
                  break;
                }

                destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
                // client-navigation if it is falling back to hard navigation if
                // it's not

                if (!destination.startsWith('/')) {
                  _context.next = 63;
                  break;
                }

                parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

                this._resolveHref(parsedHref, pages);

                if (!pages.includes(parsedHref.pathname)) {
                  _context.next = 63;
                  break;
                }

                return _context.abrupt("return", this.change('replaceState', destination, destination, options));

              case 63:
                window.location.href = destination;
                return _context.abrupt("return", new Promise(function () {}));

              case 65:
                Router.events.emit('beforeHistoryChange', as);
                this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

                if (false) {}

                _context.next = 70;
                return this.set(route, pathname, query, cleanedAs, routeInfo)["catch"](function (e) {
                  if (e.cancelled) error = error || e;else throw e;
                });

              case 70:
                if (!error) {
                  _context.next = 73;
                  break;
                }

                Router.events.emit('routeChangeError', error, cleanedAs);
                throw error;

              case 73:
                if (false) {}

                Router.events.emit('routeChangeComplete', as);
                return _context.abrupt("return", true);

              case 78:
                _context.prev = 78;
                _context.t0 = _context["catch"](51);

                if (!_context.t0.cancelled) {
                  _context.next = 82;
                  break;
                }

                return _context.abrupt("return", false);

              case 82:
                throw _context.t0;

              case 83:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[51, 78]]);
      }));

      function change(_x, _x2, _x3, _x4) {
        return _change.apply(this, arguments);
      }

      return change;
    }()
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (false) {}

      if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
        this._shallow = options.shallow;
        window.history[method]({
          url: url,
          as: as,
          options: options,
          __N: true
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "handleRouteInfoError",
    value: function () {
      var _handleRouteInfoError = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(err, pathname, query, as, loadErrorFail) {
        var _yield$this$fetchComp, Component, styleSheets, routeInfo;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!err.cancelled) {
                  _context2.next = 2;
                  break;
                }

                throw err;

              case 2:
                if (!(PAGE_LOAD_ERROR in err || loadErrorFail)) {
                  _context2.next = 6;
                  break;
                }

                Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
                //  1. Page doesn't exists
                //  2. Page does exist in a different zone
                //  3. Internal error while loading the page
                // So, doing a hard reload is the proper way to deal with this.

                window.location.href = as; // Changing the URL doesn't block executing the current code path.
                // So let's throw a cancellation error stop the routing logic.

                throw buildCancellationError();

              case 6:
                _context2.prev = 6;
                _context2.next = 9;
                return this.fetchComponent('/_error');

              case 9:
                _yield$this$fetchComp = _context2.sent;
                Component = _yield$this$fetchComp.page;
                styleSheets = _yield$this$fetchComp.styleSheets;
                routeInfo = {
                  Component: Component,
                  styleSheets: styleSheets,
                  err: err,
                  error: err
                };
                _context2.prev = 13;
                _context2.next = 16;
                return this.getInitialProps(Component, {
                  err: err,
                  pathname: pathname,
                  query: query
                });

              case 16:
                routeInfo.props = _context2.sent;
                _context2.next = 23;
                break;

              case 19:
                _context2.prev = 19;
                _context2.t0 = _context2["catch"](13);
                console.error('Error in error page `getInitialProps`: ', _context2.t0);
                routeInfo.props = {};

              case 23:
                return _context2.abrupt("return", routeInfo);

              case 26:
                _context2.prev = 26;
                _context2.t1 = _context2["catch"](6);
                return _context2.abrupt("return", this.handleRouteInfoError(_context2.t1, pathname, query, as, true));

              case 29:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[6, 26], [13, 19]]);
      }));

      function handleRouteInfoError(_x5, _x6, _x7, _x8, _x9) {
        return _handleRouteInfoError.apply(this, arguments);
      }

      return handleRouteInfoError;
    }()
  }, {
    key: "getRouteInfo",
    value: function () {
      var _getRouteInfo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(route, pathname, query, as) {
        var _this3 = this;

        var shallow,
            cachedRouteInfo,
            routeInfo,
            Component,
            __N_SSG,
            __N_SSP,
            _require,
            isValidElementType,
            dataHref,
            props,
            _args3 = arguments;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                shallow = _args3.length > 4 && _args3[4] !== undefined ? _args3[4] : false;
                _context3.prev = 1;
                cachedRouteInfo = this.components[route];

                if (!(shallow && cachedRouteInfo && this.route === route)) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return", cachedRouteInfo);

              case 5:
                if (!cachedRouteInfo) {
                  _context3.next = 9;
                  break;
                }

                _context3.t0 = cachedRouteInfo;
                _context3.next = 12;
                break;

              case 9:
                _context3.next = 11;
                return this.fetchComponent(route).then(function (res) {
                  return {
                    Component: res.page,
                    styleSheets: res.styleSheets,
                    __N_SSG: res.mod.__N_SSG,
                    __N_SSP: res.mod.__N_SSP
                  };
                });

              case 11:
                _context3.t0 = _context3.sent;

              case 12:
                routeInfo = _context3.t0;
                Component = routeInfo.Component, __N_SSG = routeInfo.__N_SSG, __N_SSP = routeInfo.__N_SSP;

                if (true) {
                  _context3.next = 18;
                  break;
                }

                _require = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-is'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), isValidElementType = _require.isValidElementType;

                if (isValidElementType(Component)) {
                  _context3.next = 18;
                  break;
                }

                throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));

              case 18:
                if (__N_SSG || __N_SSP) {
                  dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
                    pathname: pathname,
                    query: query
                  }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
                }

                _context3.next = 21;
                return this._getData(function () {
                  return __N_SSG ? _this3._getStaticData(dataHref) : __N_SSP ? _this3._getServerData(dataHref) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
                  {
                    pathname: pathname,
                    query: query,
                    asPath: as
                  });
                });

              case 21:
                props = _context3.sent;
                routeInfo.props = props;
                this.components[route] = routeInfo;
                return _context3.abrupt("return", routeInfo);

              case 27:
                _context3.prev = 27;
                _context3.t1 = _context3["catch"](1);
                return _context3.abrupt("return", this.handleRouteInfoError(_context3.t1, pathname, query, as));

              case 30:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 27]]);
      }));

      function getRouteInfo(_x10, _x11, _x12, _x13) {
        return _getRouteInfo.apply(this, arguments);
      }

      return getRouteInfo;
    }()
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      return this.notify(data);
    }
    /**
    * Callback to execute before replacing router state
    * @param cb callback to be executed
    */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = (0, _slicedToArray2["default"])(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = (0, _slicedToArray2["default"])(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = (0, _slicedToArray2["default"])(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
  }, {
    key: "_resolveHref",
    value: function _resolveHref(parsedHref, pages) {
      var applyBasePath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var pathname = parsedHref.pathname;
      var cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

      if (cleanPathname === '/404' || cleanPathname === '/_error') {
        return parsedHref;
      } // handle resolving href for dynamic routes


      if (!pages.includes(cleanPathname)) {
        // eslint-disable-next-line array-callback-return
        pages.some(function (page) {
          if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
            parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
            return true;
          }
        });
      }

      return parsedHref;
    }
    /**
    * Prefetch page code, you may wait for the data during page rendering.
    * This feature only works in production!
    * @param url the href of prefetched page
    * @param asPath the as path of the prefetched page
    */

  }, {
    key: "prefetch",
    value: function () {
      var _prefetch = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(url) {
        var asPath,
            options,
            parsed,
            _parsed2,
            pathname,
            pages,
            route,
            _args4 = arguments;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                asPath = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : url;
                options = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : {};
                parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
                _parsed2 = parsed, pathname = _parsed2.pathname;
                _context4.next = 6;
                return this.pageLoader.getPageList();

              case 6:
                pages = _context4.sent;
                parsed = this._resolveHref(parsed, pages);

                if (parsed.pathname !== pathname) {
                  pathname = parsed.pathname;
                  url = (0, _utils.formatWithValidation)(parsed);
                } // Prefetch is not supported in development mode because it would trigger on-demand-entries


                if (true) {
                  _context4.next = 11;
                  break;
                }

                return _context4.abrupt("return");

              case 11:
                route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
                _context4.next = 14;
                return Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function prefetch(_x14) {
        return _prefetch.apply(this, arguments);
      }

      return prefetch;
    }()
  }, {
    key: "fetchComponent",
    value: function () {
      var _fetchComponent = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(route) {
        var cancelled, cancel, componentResult, error;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                cancelled = false;

                cancel = this.clc = function () {
                  cancelled = true;
                };

                _context5.next = 4;
                return this.pageLoader.loadPage(route);

              case 4:
                componentResult = _context5.sent;

                if (!cancelled) {
                  _context5.next = 9;
                  break;
                }

                error = new Error("Abort fetching component for route: \"".concat(route, "\""));
                error.cancelled = true;
                throw error;

              case 9:
                if (cancel === this.clc) {
                  this.clc = null;
                }

                return _context5.abrupt("return", componentResult);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function fetchComponent(_x15) {
        return _fetchComponent.apply(this, arguments);
      }

      return fetchComponent;
    }()
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this4 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this4.clc) {
          _this4.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "_getStaticData",
    value: function _getStaticData(dataHref) {
      var _this5 = this;

      var _URL = new URL(dataHref, window.location.href),
          cacheKey = _URL.href;

      if ( true && this.sdc[cacheKey]) {
        return Promise.resolve(this.sdc[cacheKey]);
      }

      return fetchNextData(dataHref, this.isSsr).then(function (data) {
        _this5.sdc[cacheKey] = data;
        return data;
      });
    }
  }, {
    key: "_getServerData",
    value: function _getServerData(dataHref) {
      return fetchNextData(dataHref, this.isSsr);
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return (0, _utils.loadGetInitialProps)(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        Router.events.emit('routeChangeError', buildCancellationError(), as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      return this.sub(data, this.components['/_app'].Component);
    }
  }]);
  return Router;
}();

exports["default"] = Router;
Router.events = (0, _mitt["default"])();

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, function (_char) {
    return encodeURIComponent(_char);
  });
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

var _regenerator = _interopRequireDefault(__webpack_require__("vJKn"));

var _typeof2 = _interopRequireDefault(__webpack_require__("C+bE"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("qVT1"));

exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  var used = false;
  var result;
  return function () {
    if (!used) {
      used = true;
      result = fn.apply(void 0, arguments);
    }

    return result;
  };
}

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

function loadGetInitialProps(_x, _x2) {
  return _loadGetInitialProps.apply(this, arguments);
}

function _loadGetInitialProps() {
  _loadGetInitialProps = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(App, ctx) {
    var _App$prototype, message, res, props, _message;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (true) {
              _context.next = 4;
              break;
            }

            if (!((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps)) {
              _context.next = 4;
              break;
            }

            message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.");
            throw new Error(message);

          case 4:
            // when called from _app `ctx` is nested in `ctx`
            res = ctx.res || ctx.ctx && ctx.ctx.res;

            if (App.getInitialProps) {
              _context.next = 12;
              break;
            }

            if (!(ctx.ctx && ctx.Component)) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return loadGetInitialProps(ctx.Component, ctx.ctx);

          case 9:
            _context.t0 = _context.sent;
            return _context.abrupt("return", {
              pageProps: _context.t0
            });

          case 11:
            return _context.abrupt("return", {});

          case 12:
            _context.next = 14;
            return App.getInitialProps(ctx);

          case 14:
            props = _context.sent;

            if (!(res && isResSent(res))) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("return", props);

          case 17:
            if (props) {
              _context.next = 20;
              break;
            }

            _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
            throw new Error(_message);

          case 20:
            if (false) {}

            return _context.abrupt("return", props);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadGetInitialProps.apply(this, arguments);
}

var urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

var SP = typeof performance !== 'undefined';
exports.SP = SP;
var ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = function decode(param) {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        var err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");

var DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  var resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;

  var _URL = new URL(url, resolvedBase),
      pathname = _URL.pathname,
      searchParams = _URL.searchParams,
      search = _URL.search,
      hash = _URL.hash,
      href = _URL.href,
      origin = _URL.origin,
      protocol = _URL.protocol;

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname: pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search: search,
    hash: hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "i2R6":
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "jQ8v":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChevronLeft");

/***/ }),

/***/ "kl55":
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;

/***/ }),

/***/ "lSNA":
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "m0LI":
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "mxvI":
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__("AroE");

var _typeof2 = _interopRequireDefault2(__webpack_require__("C+bE"));

var _construct2 = _interopRequireDefault2(__webpack_require__("q722"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = (0, _construct2["default"])(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if ((0, _typeof2["default"])(_router[property]) === 'object') {
        instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "nybW":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "o0o1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "oF3+":
/***/ (function(module, exports) {

module.exports = require("notistack");

/***/ }),

/***/ "pSHO":
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "q722":
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__("qhzo");

var isNativeReflectConstruct = __webpack_require__("kl55");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "qVT1":
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "qhzo":
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "vF8F":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),

/***/ "vJKn":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "wTVA":
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "wkBT":
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "xDT2":
/***/ (function(module, exports) {



/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zoAU":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__("PqPU");

var iterableToArrayLimit = __webpack_require__("mxvI");

var unsupportedIterableToArray = __webpack_require__("KckH");

var nonIterableRest = __webpack_require__("pSHO");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "zpcA":
/***/ (function(module, exports) {



/***/ })

/******/ });