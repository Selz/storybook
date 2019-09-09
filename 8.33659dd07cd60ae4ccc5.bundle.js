(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1229:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(12),__webpack_require__(13),__webpack_require__(21);var prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3),_GoogleShoppingSettingsContext__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(65),ComponentChart=function(props){var state=Object(react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_GoogleShoppingSettingsContext__WEBPACK_IMPORTED_MODULE_6__.b).state,labels=props.labels,values=props.values;return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.h,{data:state,options:{chart:{type:"line",width:null,height:240},title:{text:""},series:[{data:values}],yAxis:{title:{text:null},allowDecimals:!1},xAxis:{categories:labels},legend:{enabled:!1}}})};ComponentChart.propTypes={labels:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,values:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array},__webpack_exports__.a=ComponentChart,ComponentChart.__docgenInfo={description:"",methods:[],displayName:"ComponentChart",props:{labels:{type:{name:"array"},required:!1,description:""},values:{type:{name:"array"},required:!1,description:""}}},ComponentChart.__docgenInfo={description:"",methods:[],displayName:"ComponentChart",props:{labels:{type:{name:"array"},required:!1,description:""},values:{type:{name:"array"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Drachma.Web/assets/react/views/google-shopping-settings/views/campaigns/components/ComponentChart.js"]={name:"ComponentChart",docgenInfo:ComponentChart.__docgenInfo,path:"src/Drachma.Web/assets/react/views/google-shopping-settings/views/campaigns/components/ComponentChart.js"})},1235:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(12),__webpack_require__(13),__webpack_require__(21);var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3),_hooks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(19),_GoogleShoppingSettingsContext__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(65),_ComponentChart__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(1229),ComponentDetail=function(){var _useContext=Object(react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_GoogleShoppingSettingsContext__WEBPACK_IMPORTED_MODULE_7__.c),setup=_useContext.setup,handleAsync=_useContext.handleAsync,async=_useContext.async,handleModalErrorActive=_useContext.handleModalErrorActive,apiCampaignOne=_useContext.apiCampaignOne,apiCampaignOneChart=_useContext.apiCampaignOneChart,locale=_useContext.locale,headersDetail=JSON.parse(setup).setupCampaigns.headersDetail,_useContext2=Object(react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_GoogleShoppingSettingsContext__WEBPACK_IMPORTED_MODULE_7__.b),handleView=_useContext2.handleView,selectedCampaign=_useContext2.selectedCampaign,dayRangeAll=_useContext2.dayRangeAll,dayRangeOne=_useContext2.dayRangeOne,metricType=_useContext2.metricType,_useState=Object(react__WEBPACK_IMPORTED_MODULE_4__.useState)(),_useState2=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState,2),data=_useState2[0],setData=_useState2[1],didMount=Object(_hooks__WEBPACK_IMPORTED_MODULE_6__.a)().didMount,handleRequestSingle=Object(_hooks__WEBPACK_IMPORTED_MODULE_6__.j)().handleRequestSingle,_useState3=Object(react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),_useState4=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState3,2),chartLabels=_useState4[0],setChartLabels=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),_useState6=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState5,2),chartValues=_useState6[0],setChartValues=_useState6[1],text=locale.text,handleRequestError=function(_ref){var errorMessage=_ref.errorMessage;handleAsync(!1),handleModalErrorActive(errorMessage)},handleRequestListSuccess=function(response){var results=response.data.results;handleAsync(!1),setData(results)},handleRequestList=function(){handleAsync(!0),handleRequestSingle({url:apiCampaignOne,method:"get",params:{campaignId:selectedCampaign.id,dayRange:dayRangeOne},handleError:handleRequestError,handleSuccess:handleRequestListSuccess})},handleRequestChartSuccess=function(response){var _response$data=response.data,labels=_response$data.labels,values=_response$data.values;setChartLabels(labels),setChartValues(values)},handleRequestChart=function(){handleRequestSingle({url:apiCampaignOneChart,method:"get",params:{dayRange:dayRangeAll,metricsType:metricType,campaignId:selectedCampaign.id},handleError:handleRequestError,handleSuccess:handleRequestChartSuccess})};Object(react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function(){handleRequestList(),handleRequestChart()},[]),Object(react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function(){didMount&&(handleRequestList(),handleRequestChart())},[dayRangeAll]);var links=[{label:text.campaigns,action:"list"}],breadcrumb=react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.d,{label:selectedCampaign.campaignName,links:links,onClick:function(event){handleView(event,"list")},marginBottom:"4",async:async});return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.c,{padding:"4"},breadcrumb,!data&&react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.P,null),data&&react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.c,{paddingBottom:"4"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ComponentChart__WEBPACK_IMPORTED_MODULE_8__.a,{labels:chartLabels,values:chartValues})),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.cb,{header:null},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.pb,{reference:"table-results",size:"default",marginBottom:"3",borderRow:!0,scroll:!0,condensed:!0,borderColumn:!0,borderBottom:!0,center:!0},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.rb,{thead:!0},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.tb,null,headersDetail.map(function(item,index){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.sb,{key:index,textAlign:0===index?"left":null},item.label)}))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.rb,null,data.map(function(item,index){var productName=item.productName,impressions=item.impressions,clicks=item.clicks,conversions=item.conversions,sales=item.sales,costConversions=item.costConversions,cost=item.cost;return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.tb,{key:index,hover:!0},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.qb,{textAlign:"left",minWidth:"150px",block:!0},productName),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.qb,null,impressions),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.qb,null,clicks),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.qb,null,conversions),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.qb,null,sales),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.qb,null,costConversions),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.qb,null,cost))}))))))};__webpack_exports__.default=ComponentDetail,ComponentDetail.__docgenInfo={description:"",methods:[],displayName:"ComponentDetail"},ComponentDetail.__docgenInfo={description:"",methods:[],displayName:"ComponentDetail"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Drachma.Web/assets/react/views/google-shopping-settings/views/campaigns/components/ComponentDetail.js"]={name:"ComponentDetail",docgenInfo:ComponentDetail.__docgenInfo,path:"src/Drachma.Web/assets/react/views/google-shopping-settings/views/campaigns/components/ComponentDetail.js"})}}]);
//# sourceMappingURL=8.33659dd07cd60ae4ccc5.bundle.js.map