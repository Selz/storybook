(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1238:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var slicedToArray=__webpack_require__(6),slicedToArray_default=__webpack_require__.n(slicedToArray),react=__webpack_require__(0),react_default=__webpack_require__.n(react),components=__webpack_require__(3),hooks=__webpack_require__(19),ComponentViewHeader=__webpack_require__(289),GoogleShoppingSettingsContext=__webpack_require__(65),dist=(__webpack_require__(20),__webpack_require__(12),__webpack_require__(13),__webpack_require__(21),__webpack_require__(165)),ComponentForm=function(){var _useContext=Object(react.useContext)(GoogleShoppingSettingsContext.c),setup=_useContext.setup,locale=_useContext.locale,async=_useContext.async,setupCampaigns=JSON.parse(setup).setupCampaigns,text=locale.text,dayRangeOptions=setupCampaigns.dayRangeOptions,_useContext2=Object(react.useContext)(GoogleShoppingSettingsContext.b),dayRangeAll=_useContext2.dayRangeAll,handleView=_useContext2.handleView,handleDayRangeAll=_useContext2.handleDayRangeAll,_useFormState=Object(dist.useFormState)({dayRange:dayRangeAll},{withIds:function(name){return name},onChange:function(e,stateValues,nextStateValues){handleDayRangeAll(nextStateValues.dayRange)}}),_useFormState2=slicedToArray_default()(_useFormState,2),formState=_useFormState2[0],select=_useFormState2[1].select;return Object(react.useEffect)(function(){handleDayRangeAll(formState.values.dayRange)},[formState.values.dayRange]),react_default.a.createElement(components.o,null,react_default.a.createElement(components.p,null,react_default.a.createElement(components.u,{label:"Range",id:"dayRange",showLabel:!1,padding:"0"},react_default.a.createElement(components.E,{id:select("dayRange").id,name:select("dayRange").name,value:select("dayRange").value,onChange:select("dayRange").onChange,options:dayRangeOptions,valueKey:"value",disabled:async,control:!0}))),react_default.a.createElement(components.p,{paddingLeft:"4",marginLeft:"auto"},react_default.a.createElement(components.e,{label:text.google_campaigns_create,onClick:handleView,onClickParam:"create",appearance:"primary",disabled:async})))},ComponentActions=ComponentForm;ComponentForm.__docgenInfo={description:"",methods:[],displayName:"ComponentForm"},ComponentForm.__docgenInfo={description:"",methods:[],displayName:"ComponentForm"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Drachma.Web/assets/react/views/google-shopping-settings/views/campaigns/components/ComponentActions.js"]={name:"ComponentForm",docgenInfo:ComponentForm.__docgenInfo,path:"src/Drachma.Web/assets/react/views/google-shopping-settings/views/campaigns/components/ComponentActions.js"});var ComponentOverview=function(){var text=Object(react.useContext)(GoogleShoppingSettingsContext.c).locale.text;return react_default.a.createElement(components.wb,{marginBottom:"0"},"".concat(text.google_campaigns_overview_1," ").concat(text.learn_more_about," "),react_default.a.createElement(components.M,{label:"".concat(text.google_campaigns_smart_shopping_campaigns,"."),href:"https://www.google.com/retail/solutions/shopping-campaigns",target:"_blank"}))},components_ComponentOverview=ComponentOverview;ComponentOverview.__docgenInfo={description:"",methods:[],displayName:"ComponentOverview"},ComponentOverview.__docgenInfo={description:"",methods:[],displayName:"ComponentOverview"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Drachma.Web/assets/react/views/google-shopping-settings/views/campaigns/components/ComponentOverview.js"]={name:"ComponentOverview",docgenInfo:ComponentOverview.__docgenInfo,path:"src/Drachma.Web/assets/react/views/google-shopping-settings/views/campaigns/components/ComponentOverview.js"});var ComponentStart=Object(react.lazy)(function(){return __webpack_require__.e(14).then(__webpack_require__.bind(null,1234))}),ComponentDetail=Object(react.lazy)(function(){return __webpack_require__.e(8).then(__webpack_require__.bind(null,1235))}),ComponentEdit=Object(react.lazy)(function(){return __webpack_require__.e(13).then(__webpack_require__.bind(null,1243))}),ComponentList=Object(react.lazy)(function(){return __webpack_require__.e(9).then(__webpack_require__.bind(null,1240))}),ComponentSetupAds=Object(react.lazy)(function(){return __webpack_require__.e(10).then(__webpack_require__.bind(null,1236))}),ComponentSetupMerchant=Object(react.lazy)(function(){return __webpack_require__.e(0).then(__webpack_require__.bind(null,1233))}),ComponentConfiguring=Object(react.lazy)(function(){return __webpack_require__.e(1).then(__webpack_require__.bind(null,1230))}),ViewCampaigns=function(){var _useContext=Object(react.useContext)(GoogleShoppingSettingsContext.c),setup=_useContext.setup,apiCampaignPause=_useContext.apiCampaignPause,apiCampaignEnable=_useContext.apiCampaignEnable,apiCampaignDelete=_useContext.apiCampaignDelete,handleModalErrorActive=_useContext.handleModalErrorActive,handleNotificationActive=_useContext.handleNotificationActive,handleAsync=_useContext.handleAsync,merchantAccountConnected=_useContext.merchantAccountConnected,merchantAccountComplete=_useContext.merchantAccountComplete,adsAccountConnected=_useContext.adsAccountConnected,locale=_useContext.locale,async=_useContext.async,text=locale.text,setupCampaigns=JSON.parse(setup).setupCampaigns,dayRangeAllDefault=setupCampaigns.dayRangeAllDefault,dayRangeOneDefault=setupCampaigns.dayRangeOneDefault,handleRequestSingle=Object(hooks.j)().handleRequestSingle,_useState=Object(react.useState)("list"),_useState2=slicedToArray_default()(_useState,2),view=_useState2[0],setView=_useState2[1],_useState3=Object(react.useState)([]),_useState4=slicedToArray_default()(_useState3,2),menuActive=_useState4[0],setMenuActive=_useState4[1],_useState5=Object(react.useState)(!1),_useState6=slicedToArray_default()(_useState5,2),modalActive=_useState6[0],setModalActive=_useState6[1],_useState7=Object(react.useState)(),_useState8=slicedToArray_default()(_useState7,2),modalMessage=_useState8[0],setModalMessage=_useState8[1],_useState9=Object(react.useState)(!1),_useState10=slicedToArray_default()(_useState9,2),actionSuccess=_useState10[0],setActionSuccess=_useState10[1],_useState11=Object(react.useState)(),_useState12=slicedToArray_default()(_useState11,2),menuIndex=_useState12[0],setMenuIndex=_useState12[1],_useState13=Object(react.useState)(),_useState14=slicedToArray_default()(_useState13,2),campaignId=_useState14[0],setCampaignId=_useState14[1],_useState15=Object(react.useState)(),_useState16=slicedToArray_default()(_useState15,2),campaignName=_useState16[0],setCampaignName=_useState16[1],_useState17=Object(react.useState)(dayRangeAllDefault),_useState18=slicedToArray_default()(_useState17,2),dayRangeAll=_useState18[0],setDayRangeAll=_useState18[1],_useState19=Object(react.useState)(dayRangeOneDefault),_useState20=slicedToArray_default()(_useState19,2),dayRangeOne=_useState20[0],setDayRangeOne=_useState20[1],_useState21=Object(react.useState)("0"),metricType=slicedToArray_default()(_useState21,1)[0],_useState23=Object(react.useState)(),_useState24=slicedToArray_default()(_useState23,2),actionType=_useState24[0],setActionType=_useState24[1],_useState25=Object(react.useState)(),_useState26=slicedToArray_default()(_useState25,2),selectedCampaign=_useState26[0],setSelectedCampaign=_useState26[1],handleRequestError=function(_ref){var errorMessage=_ref.errorMessage;handleAsync(!1),handleModalErrorActive(errorMessage)},handleActionSuccess=function(response){var feedback=response.feedback,message={pause:text.google_campaigns_action_pause_success.format(campaignName),enable:text.google_campaigns_action_resume_success.format(campaignName),delete:text.google_campaigns_action_remove_success.format(campaignName)};handleAsync(!1),setModalActive(!1),feedback?(setActionSuccess(!1),handleNotificationActive(feedback.message,"warning")):(setActionSuccess(!0),handleNotificationActive(message[actionType],"success"))},handleMenuAction=function(){handleAsync(!0),setActionSuccess(!1),handleRequestSingle({url:{pause:apiCampaignPause,enable:apiCampaignEnable,delete:apiCampaignDelete}[actionType],method:"post",data:{campaignId:campaignId},handleError:handleRequestError,handleSuccess:handleActionSuccess})},handleMenuInactive=function(){0<=menuIndex&&(menuActive[menuIndex]=!1),setMenuActive(menuActive),setMenuIndex()},loader=react_default.a.createElement(components.P,null);return react_default.a.createElement(GoogleShoppingSettingsContext.b.Provider,{value:{menuActive:menuActive,selectedCampaign:selectedCampaign,dayRangeAll:dayRangeAll,dayRangeOne:dayRangeOne,metricType:metricType,view:view,actionSuccess:actionSuccess,handleView:function(event,updateView){handleAsync(!1),setView(updateView)},handleDayRangeAll:function(updateDayRangeAll){setDayRangeAll(updateDayRangeAll)},handleDayRangeOne:function(updateDayRangeOne){setDayRangeOne(updateDayRangeOne)},handleSelectedCampaign:function(campaign){setSelectedCampaign(campaign)},handleModalActive:function(id,name,action){setCampaignId(id),setCampaignName(name),setActionType(action);var message={pause:text.google_campaigns_action_pause.format(name),enable:text.google_campaigns_action_resume.format(name),delete:text.google_campaigns_action_remove.format(name)};setModalMessage(message[action]),setModalActive(!0)},handleMenuActive:function(event,params){var index=params.index;handleMenuInactive(),menuActive[index]=!0,setMenuActive(menuActive),setMenuIndex(index)},handleMenuInactive:handleMenuInactive,handleMenuAction:handleMenuAction}},react_default.a.createElement(ComponentViewHeader.a,{label:text.google_campaigns_smart_shopping_campaign}),!merchantAccountConnected&&react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(components.c,{padding:"4",borderBottom:!0},react_default.a.createElement(components_ComponentOverview,null)),react_default.a.createElement(components.c,{padding:"4"},react_default.a.createElement(react.Suspense,{fallback:loader},react_default.a.createElement(ComponentSetupMerchant,null)))),!merchantAccountComplete&&merchantAccountConnected&&react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(components.c,{padding:"4"},react_default.a.createElement(components_ComponentOverview,null)),react_default.a.createElement(components.c,{padding:"4",paddingTop:"2"},react_default.a.createElement(react.Suspense,{fallback:loader},react_default.a.createElement(ComponentConfiguring,null)))),merchantAccountComplete&&!adsAccountConnected&&merchantAccountConnected&&react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(components.c,{padding:"4",borderBottom:!0},react_default.a.createElement(components_ComponentOverview,null)),react_default.a.createElement(components.c,{padding:"4"},react_default.a.createElement(react.Suspense,{fallback:loader},react_default.a.createElement(ComponentSetupAds,null)))),merchantAccountComplete&&merchantAccountConnected&&adsAccountConnected&&react_default.a.createElement(react_default.a.Fragment,null,"start"===view&&react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(components.c,{padding:"4",borderBottom:!0},react_default.a.createElement(components_ComponentOverview,null)),react_default.a.createElement(react.Suspense,{fallback:loader},react_default.a.createElement(ComponentStart,null))),"create"===view&&react_default.a.createElement(react.Suspense,{fallback:loader},react_default.a.createElement(ComponentEdit,{create:!0})),"edit"===view&&react_default.a.createElement(react.Suspense,{fallback:loader},react_default.a.createElement(ComponentEdit,null)),"detail"===view&&react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(components.c,{padding:"4"},react_default.a.createElement(ComponentActions,null)),react_default.a.createElement(react.Suspense,{fallback:loader},react_default.a.createElement(ComponentDetail,null))),"list"===view&&react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(components.c,{padding:"4"},react_default.a.createElement(ComponentActions,null)),react_default.a.createElement(react.Suspense,{fallback:loader},react_default.a.createElement(ComponentList,null))),react_default.a.createElement(components.V,{label:text.confirm,message:modalMessage,confirm:handleMenuAction,cancel:function(){setCampaignId(),setCampaignName(),setActionType(),setModalActive(!1)},active:modalActive,async:async})))};__webpack_exports__.default=ViewCampaigns;ViewCampaigns.__docgenInfo={description:"",methods:[],displayName:"ViewCampaigns"},ViewCampaigns.__docgenInfo={description:"",methods:[],displayName:"ViewCampaigns"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Drachma.Web/assets/react/views/google-shopping-settings/views/campaigns/ViewCampaigns.js"]={name:"ViewCampaigns",docgenInfo:ViewCampaigns.__docgenInfo,path:"src/Drachma.Web/assets/react/views/google-shopping-settings/views/campaigns/ViewCampaigns.js"})}}]);
//# sourceMappingURL=12.33659dd07cd60ae4ccc5.bundle.js.map