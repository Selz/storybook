(window.webpackJsonp=window.webpackJsonp||[]).push([[8,12],{1652:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(12),__webpack_require__(31),__webpack_require__(29),__webpack_require__(19),__webpack_require__(26),__webpack_require__(23),__webpack_require__(149),__webpack_require__(229),__webpack_require__(30);var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(3),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9__),react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__),react_use_form_state__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(228),_components__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(33),_components__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(222),_components__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(1620),_components__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(132),_components__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(1646),_components__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(58),_hooks__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(1612),_GoogleShoppingSettingsContext__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(100),ComponentForm=function(){var _useContext=Object(react__WEBPACK_IMPORTED_MODULE_10__.useContext)(_GoogleShoppingSettingsContext__WEBPACK_IMPORTED_MODULE_19__.c),setupAds=_useContext.setupAds,handleModalErrorActive=_useContext.handleModalErrorActive,handleNotificationActive=_useContext.handleNotificationActive,handleAsync=_useContext.handleAsync,async=_useContext.async,apiAdsSetupProgress=_useContext.apiAdsSetupProgress,apiAdsSetupProgressSave=_useContext.apiAdsSetupProgressSave,adsAccountConnected=_useContext.adsAccountConnected,text=_useContext.locale.text,data=setupAds.data,handleShowForm=Object(react__WEBPACK_IMPORTED_MODULE_10__.useContext)(_GoogleShoppingSettingsContext__WEBPACK_IMPORTED_MODULE_19__.a).handleShowForm,handleRequestSingle=Object(_hooks__WEBPACK_IMPORTED_MODULE_18__.a)().handleRequestSingle,_useFormState=Object(react_use_form_state__WEBPACK_IMPORTED_MODULE_11__.a)({connectGoogleAdsAccount:!0,acceptGoolgleAdsEmail:!1,addBillingInformation:!1}),_useFormState2=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9___default()(_useFormState,2),formState=_useFormState2[0],checkbox=_useFormState2[1].checkbox,_useState=Object(react__WEBPACK_IMPORTED_MODULE_10__.useState)(!1),_useState2=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9___default()(_useState,2),formValid=_useState2[0],setFormValid=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_10__.useState)(!1),_useState4=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9___default()(_useState3,2),showCompleteButton=_useState4[0],setShowCompleteButton=_useState4[1];Object(react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(function(){var values=formState.values,valid=Object.values(values).every(function(item){return!0===item});setFormValid(valid)},[formState]);var handleSetupProgressSuccess=function(response){var _response$data=response.data,billingReady=_response$data.billingReady,inviteAccepted=_response$data.inviteAccepted,setupComplete=_response$data.setupComplete;handleAsync(!1),formState.setField("acceptGoolgleAdsEmail",inviteAccepted),formState.setField("addBillingInformation",billingReady),setupComplete||setShowCompleteButton(!0)},handleSetupProgressError=function(_ref){var errorMessage=_ref.errorMessage;handleAsync(!1),handleModalErrorActive(errorMessage)};Object(react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(function(){handleAsync(!0),handleRequestSingle({url:apiAdsSetupProgress,method:"get",handleError:handleSetupProgressError,handleSuccess:handleSetupProgressSuccess})},[]);var handleSetupProgressSaveSuccess=function(){handleAsync(!1),handleShowForm(null,!1),setShowCompleteButton(!1),handleNotificationActive(text.google_ads_account_create_notification_success,"success")},handleSetupProgressSaveError=function(_ref2){var errorMessage=_ref2.errorMessage;handleAsync(!1),handleModalErrorActive(errorMessage)},handleSetupProgressSave=function(){handleAsync(!0),handleRequestSingle({url:apiAdsSetupProgressSave,method:"post",handleError:handleSetupProgressSaveError,handleSuccess:handleSetupProgressSaveSuccess})},form=data.map(function(item,index){var id=item.id,label=item.label,description=item.description,disabled=item.disabled,link=item.link,linkLabel=item.linkLabel,_checkbox=checkbox(id),name=_checkbox.name,onChange=_checkbox.onChange,type=_checkbox.type,checked=_checkbox.checked,help=react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_12__.a,{marginBottom:"0",size:"small",inline:!0,light:!0},description&&"".concat(description," "),link&&react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_13__.a,{label:linkLabel,href:link,target:"_blank"}));return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_14__.a,{label:label,help:help,checked:checked,disabled:disabled||adsAccountConnected,onChange:[onChange],id:id,name:name,key:index,type:type,marginBottom:"4",marginBottomHelp:"0"})});return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_15__.a,{padding:"4"},react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_16__.a,{onSubmit:handleSetupProgressSave},react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_12__.a,{strong:!0,label:text.google_ads_account_checklist,size:"base",marginBottom:"5"}),react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_12__.a,{label:text.google_ads_account_checklist_description,marginBottom:"5"}),form,showCompleteButton&&react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_17__.a,{data:formValid,label:text.google_ads_account_checklist_complete,onClick:handleSetupProgressSave,type:"submit",appearance:"primary",disabled:!formValid,marginTop:"4",loading:async}))))};__webpack_exports__.default=ComponentForm,ComponentForm.__docgenInfo={description:"",methods:[],displayName:"ComponentForm"},ComponentForm.__docgenInfo={description:"",methods:[],displayName:"ComponentForm"},ComponentForm.__docgenInfo={description:"",methods:[],displayName:"ComponentForm"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Drachma.Web/assets/react/views/google-shopping-settings/views/ads/components/ComponentForm.js"]={name:"ComponentForm",docgenInfo:ComponentForm.__docgenInfo,path:"src/Drachma.Web/assets/react/views/google-shopping-settings/views/ads/components/ComponentForm.js"})},1667:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),slicedToArray=__webpack_require__(3),slicedToArray_default=__webpack_require__.n(slicedToArray),Block=__webpack_require__(132),Text=__webpack_require__(33),Button=__webpack_require__(58),ModalConfirm=__webpack_require__(1592),useRequestSingle=__webpack_require__(1612),GoogleShoppingSettingsContext=__webpack_require__(100),ComponentConnect=function(){var _useContext=Object(react.useContext)(GoogleShoppingSettingsContext.c),apiAdsDisconnect=_useContext.apiAdsDisconnect,handleAdsAccountConnected=_useContext.handleAdsAccountConnected,handleAdsAccountConnectedId=_useContext.handleAdsAccountConnectedId,handleNotificationActive=_useContext.handleNotificationActive,handleModalErrorActive=_useContext.handleModalErrorActive,adsAccountConnectedId=_useContext.adsAccountConnectedId,handleAsync=_useContext.handleAsync,async=_useContext.async,text=_useContext.locale.text,handleShowForm=Object(react.useContext)(GoogleShoppingSettingsContext.a).handleShowForm,handleRequestSingle=Object(useRequestSingle.a)().handleRequestSingle,_useState=Object(react.useState)(!1),_useState2=slicedToArray_default()(_useState,2),modalActive=_useState2[0],setModalActive=_useState2[1],handleModalActive=function(){setModalActive(!0)},handleDisconnectSuccess=function(){handleAsync(!1),handleModalActive(),handleShowForm(null,!1),handleAdsAccountConnected(!1),handleAdsAccountConnectedId(null),handleNotificationActive(text.google_ads_account_disconnect_notification_success,"success")},handleDisconnectError=function(_ref){var errorMessage=_ref.errorMessage;handleAsync(!1),handleModalErrorActive(errorMessage)};return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(Block.a,{padding:"4",borderBottom:!0},react_default.a.createElement(Text.a,null,"".concat(adsAccountConnectedId," "),react_default.a.createElement(Button.a,{label:text.disconnect,onClick:handleModalActive,disabled:async,faux:!0})),react_default.a.createElement(Text.a,{marginBottom:"0",label:text.google_ads_account_adminsitrative_rights}),react_default.a.createElement(ModalConfirm.a,{label:text.confirm,message:text.google_ads_account_disconnect,confirm:function(){handleAsync(!0),handleRequestSingle({url:apiAdsDisconnect,method:"get",handleError:handleDisconnectError,handleSuccess:handleDisconnectSuccess})},cancel:function(){setModalActive(!1)},active:modalActive,async:async,action:"destructive",actionLabelConfirm:text.disconnect})))},components_ComponentConnect=ComponentConnect;ComponentConnect.__docgenInfo={description:"",methods:[],displayName:"ComponentConnect"},ComponentConnect.__docgenInfo={description:"",methods:[],displayName:"ComponentConnect"},ComponentConnect.__docgenInfo={description:"",methods:[],displayName:"ComponentConnect"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Drachma.Web/assets/react/views/google-shopping-settings/views/ads/components/ComponentConnect.js"]={name:"ComponentConnect",docgenInfo:ComponentConnect.__docgenInfo,path:"src/Drachma.Web/assets/react/views/google-shopping-settings/views/ads/components/ComponentConnect.js"});var ComponentForm=__webpack_require__(1652),ComponentAccount=function(){return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(components_ComponentConnect,null),react_default.a.createElement(ComponentForm.default,null))};__webpack_exports__.default=ComponentAccount;ComponentAccount.__docgenInfo={description:"",methods:[],displayName:"ComponentAccount"},ComponentAccount.__docgenInfo={description:"",methods:[],displayName:"ComponentAccount"},ComponentAccount.__docgenInfo={description:"",methods:[],displayName:"ComponentAccount"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Drachma.Web/assets/react/views/google-shopping-settings/views/ads/components/ComponentAccount.js"]={name:"ComponentAccount",docgenInfo:ComponentAccount.__docgenInfo,path:"src/Drachma.Web/assets/react/views/google-shopping-settings/views/ads/components/ComponentAccount.js"})}}]);
//# sourceMappingURL=8.b36572419e0152e3cc86.bundle.js.map