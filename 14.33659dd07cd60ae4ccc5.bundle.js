(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1234:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(30),__webpack_require__(16),__webpack_require__(12),__webpack_require__(13),__webpack_require__(21),__webpack_require__(15);var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(83),_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(2),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(6),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8__),react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__),react_use_form_state__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(165),_components__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(3),_hooks__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(19),_GoogleShoppingSettingsContext__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(65);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}var ComponentStart=function(){var _useContext=Object(react__WEBPACK_IMPORTED_MODULE_9__.useContext)(_GoogleShoppingSettingsContext__WEBPACK_IMPORTED_MODULE_13__.c),setupCampaigns=_useContext.setupCampaigns,apiCampaignSetupTracking=_useContext.apiCampaignSetupTracking,handleModalErrorActive=_useContext.handleModalErrorActive,handleAsync=_useContext.handleAsync,async=_useContext.async,locale=_useContext.locale,handleViewCampaign=Object(react__WEBPACK_IMPORTED_MODULE_9__.useContext)(_GoogleShoppingSettingsContext__WEBPACK_IMPORTED_MODULE_13__.b).handleView,handleRequestSingle=Object(_hooks__WEBPACK_IMPORTED_MODULE_12__.j)().handleRequestSingle,conversionTrackingHasExistingSettings=setupCampaigns.conversionTrackingHasExistingSettings,conversionTrackingSetupComplete=setupCampaigns.conversionTrackingSetupComplete,text=locale.text,_useFormState=Object(react_use_form_state__WEBPACK_IMPORTED_MODULE_10__.useFormState)({conversionTracking:"newConversionTags"},{withIds:!0}),_useFormState2=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8___default()(_useFormState,2),formState=_useFormState2[0],radio=_useFormState2[1].radio,handleTrackingSuccess=function(){handleViewCampaign(null,"create")},handleTrackingError=function(_ref){var errorMessage=_ref.errorMessage;handleModalErrorActive(errorMessage)},handleTracking=function(event){handleAsync(!0);var requestData=function(target){for(var source,i=1;i<arguments.length;i++)source=null==arguments[i]?{}:arguments[i],i%2?ownKeys(source,!0).forEach(function(key){_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(target,key,source[key])}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))});return target}({},formState.values);handleRequestSingle({url:apiCampaignSetupTracking,data:requestData,handleError:handleTrackingError,handleSuccess:handleTrackingSuccess}),event.preventDefault()};return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_11__.wb,{strong:!0,label:text.google_campaigns_tracking_tags,padding:"4",paddingBottom:"0",marginBottom:"0",size:"base"}),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_11__.c,{padding:"4"},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_11__.wb,{label:text.google_campaigns_tracking_tags_description_1}),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_11__.wb,{label:text.google_campaigns_tracking_tags_description_2,marginBottom:"6"}),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_11__.q,{onSubmit:handleTracking},conversionTrackingHasExistingSettings&&!conversionTrackingSetupComplete&&react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_11__.u,{marginBottom:"2"},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_11__.s,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6___default()({},radio("conversionTracking","newConversionTags"),{type:"radio",label:text.google_campaigns_tracking_tags_form_create_new_label}))),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_11__.u,{marginBottom:"4",showLabel:!0},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_11__.s,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6___default()({},radio("conversionTracking","existingConversionTags"),{type:"radio",help:text.google_campaigns_tracking_tags_form_use_existing_help,label:text.google_campaigns_tracking_tags_form_use_existing_label,required:!0})))),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_11__.e,{label:text.google_campaigns_create,onClick:handleTracking,onClickParam:"create",appearance:"primary",loading:async}))))};__webpack_exports__.default=ComponentStart,ComponentStart.__docgenInfo={description:"",methods:[],displayName:"ComponentStart"},ComponentStart.__docgenInfo={description:"",methods:[],displayName:"ComponentStart"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Drachma.Web/assets/react/views/google-shopping-settings/views/campaigns/components/ComponentStart.js"]={name:"ComponentStart",docgenInfo:ComponentStart.__docgenInfo,path:"src/Drachma.Web/assets/react/views/google-shopping-settings/views/campaigns/components/ComponentStart.js"})}}]);
//# sourceMappingURL=14.33659dd07cd60ae4ccc5.bundle.js.map