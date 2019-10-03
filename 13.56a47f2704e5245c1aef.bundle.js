(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1541:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var slicedToArray=__webpack_require__(4),slicedToArray_default=__webpack_require__.n(slicedToArray),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),react=__webpack_require__(0),react_default=__webpack_require__.n(react),components=__webpack_require__(2),hooks=__webpack_require__(15),GoogleShoppingSettingsContext=__webpack_require__(86),helpers_extends=(__webpack_require__(12),__webpack_require__(26),__webpack_require__(27),__webpack_require__(28),__webpack_require__(59),__webpack_require__(25),__webpack_require__(40),__webpack_require__(13),__webpack_require__(24),__webpack_require__(160),__webpack_require__(17),__webpack_require__(30),__webpack_require__(61)),extends_default=__webpack_require__.n(helpers_extends),defineProperty=__webpack_require__(3),defineProperty_default=__webpack_require__.n(defineProperty),index_es=__webpack_require__(197);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}var ComponentForm=function(props){var hasErrors,hasName,hasBudget,_useContext=Object(react.useContext)(GoogleShoppingSettingsContext.c),setup=_useContext.setup,handleAsync=_useContext.handleAsync,apiCampaignSave=_useContext.apiCampaignSave,locale=_useContext.locale,async=_useContext.async,setupCampaigns=JSON.parse(setup).setupCampaigns,text=locale.text,buttons=locale.buttons,validation=locale.validation,targetCountryOptions=setupCampaigns.targetCountryOptions,currencyFormatted=setupCampaigns.currencyFormatted,minimumBudget=setupCampaigns.minimumBudget,minimumBudgetFormatted=setupCampaigns.minimumBudgetFormatted,_useContext2=Object(react.useContext)(GoogleShoppingSettingsContext.b),handleView=_useContext2.handleView,selectedCampaign=_useContext2.selectedCampaign,handleRequestSingle=Object(hooks.k)().handleRequestSingle,handleSaveSuccess=props.handleSaveSuccess,handleSaveError=props.handleSaveError,handleLoading=props.handleLoading,defaultValues=props.defaultValues,defaultOptions=props.defaultOptions,loading=props.loading,campaignName=defaultValues.campaignName,budgetAmount=defaultValues.budgetAmount,targetCountry=defaultValues.targetCountry,excludeCategories=defaultValues.excludeCategories,availableCategories=defaultOptions.availableCategories,hasAvailableCategories=availableCategories.length,_useFormState=Object(index_es.a)({campaignName:campaignName,budgetAmount:budgetAmount,excludeCategories:excludeCategories,targetCountry:targetCountry.value},{withIds:function(name){return name}}),_useFormState2=slicedToArray_default()(_useFormState,2),formState=_useFormState2[0],_useFormState2$=_useFormState2[1],textForm=_useFormState2$.text,number=_useFormState2$.number,select=_useFormState2$.select,selectMultiple=_useFormState2$.selectMultiple,label=_useFormState2$.label,handleSubmit=function(event){var requestData=function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null==arguments[i]?{}:arguments[i],i%2?ownKeys(source,!0).forEach(function(key){defineProperty_default()(target,key,source[key])}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))});return target}({},formState.values,{id:selectedCampaign&&selectedCampaign.id});handleAsync(!0),handleLoading("save",!0),handleRequestSingle({url:apiCampaignSave,data:requestData,handleError:handleSaveError,handleSuccess:handleSaveSuccess}),event.preventDefault()};return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(components.q,{onSubmit:handleSubmit,horizontal:!0},react_default.a.createElement(components.u,{valid:!formState.touched.campaignName||formState.validity.campaignName,labelHook:react_default.a.createElement(components.B,extends_default()({},label("campaignName"),{label:text.google_campaigns_form_campaign_name_label})),controls:!0,grouped:!0},react_default.a.createElement(components.z,extends_default()({},textForm({name:"campaignName",validate:function(value){return!!value.trim()||validation.generic.required.format(text.google_campaigns_form_campaign_name_label)}}),{disabled:async,placeholder:text.google_campaigns_form_campaign_name_placeholder})),formState.touched.campaignName&&formState.errors.campaignName&&react_default.a.createElement(components.w,{label:formState.errors.campaignName,marginBottom:"0"})),react_default.a.createElement(components.u,{valid:!formState.touched.budgetAmount||formState.validity.budgetAmount,labelHook:react_default.a.createElement(components.B,extends_default()({},label("budgetAmount"),{label:text.google_campaigns_form_daily_budget_label})),help:text.google_campaigns_form_daily_budget_help.format(minimumBudgetFormatted),controls:!0,grouped:!0},react_default.a.createElement(components.A,{icon:currencyFormatted,inline:!0},react_default.a.createElement(components.z,extends_default()({},number({name:"budgetAmount",validate:function(value){return value.trim()?!(parseInt(value.trim(),10)<minimumBudget)||text.google_campaigns_form_daily_budget_validation_message.format(minimumBudgetFormatted):validation.generic.required.format(text.google_campaigns_form_daily_budget_label)}}),{disabled:async,placeholder:text.google_campaigns_form_daily_budget_placeholder}))),formState.touched.budgetAmount&&formState.errors.budgetAmount&&react_default.a.createElement(components.w,{label:formState.errors.budgetAmount,marginBottom:"0"})),react_default.a.createElement(components.u,{label:text.google_campaigns_form_target_country_label,id:"targetCountry",showLabel:!0,controls:!0,grouped:!0},1<targetCountryOptions.length&&react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(components.E,{id:select("targetCountry").id,name:select("targetCountry").name,value:select("targetCountry").value,onChange:select("targetCountry").onChange,options:targetCountryOptions,valueKey:"value",disabled:async,control:!0})),1===targetCountryOptions.length&&react_default.a.createElement(components.xb,{label:targetCountry.label||targetCountryOptions[0].label,marginBottom:"2",marginTop:"1",paddingTop:"2px"})),react_default.a.createElement(components.u,{label:text.google_campaigns_form_exclude_categories_label,id:"excludeCategories",help:hasAvailableCategories?"":text.google_campaigns_form_exclude_categories_help,showLabel:!0,controls:!0,grouped:!0},react_default.a.createElement(components.E,{id:selectMultiple("excludeCategories").id,name:selectMultiple("excludeCategories").name,value:selectMultiple("excludeCategories").value,onChange:selectMultiple("excludeCategories").onChange,options:availableCategories,valueKey:"value",disabled:!hasAvailableCategories||async,multiple:!0,control:!0})),react_default.a.createElement(components.c,{padding:"4",borderTop:!0},react_default.a.createElement(components.xb,{strong:!0,label:text.google_campaigns_campaign_targeted_customers,size:"base"}),react_default.a.createElement(components.xb,{label:text.google_campaigns_campaign_targeted_customers_description,marginBottom:"4"}),react_default.a.createElement(components.xb,{strong:!0,label:text.google_campaigns_campaign_duration,size:"base"}),react_default.a.createElement(components.xb,{label:text.google_campaigns_campaign_duration_description,marginBottom:"0"})),react_default.a.createElement(components.r,null,react_default.a.createElement(components.e,{label:buttons.save,onClick:handleSubmit,type:"submit",appearance:"primary",marginTop:"4",marginRight:"0",disabled:(hasErrors=0<Object.entries(formState.errors).length,hasName=0<formState.values.campaignName.length,hasBudget=0<formState.values.budgetAmount.length,!(!hasErrors&&hasName&&hasBudget)||async),loading:loading.save}),react_default.a.createElement(components.e,{label:buttons.cancel,onClick:function(){handleView(null,"list")},appearance:"default",marginTop:"4",disabled:async,loading:loading.cancel}))))};ComponentForm.defaultProps={defaultValues:{},defaultOptions:{}},ComponentForm.propTypes={defaultValues:prop_types_default.a.object,defaultOptions:prop_types_default.a.object,handleSaveSuccess:prop_types_default.a.func,handleSaveError:prop_types_default.a.func,handleLoading:prop_types_default.a.func,loading:prop_types_default.a.object};var components_ComponentForm=ComponentForm;ComponentForm.__docgenInfo={description:"",methods:[],displayName:"ComponentForm",props:{defaultValues:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""},defaultOptions:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""},handleSaveSuccess:{type:{name:"func"},required:!1,description:""},handleSaveError:{type:{name:"func"},required:!1,description:""},handleLoading:{type:{name:"func"},required:!1,description:""},loading:{type:{name:"object"},required:!1,description:""}}},ComponentForm.__docgenInfo={description:"",methods:[],displayName:"ComponentForm",props:{defaultValues:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""},defaultOptions:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""},handleSaveSuccess:{type:{name:"func"},required:!1,description:""},handleSaveError:{type:{name:"func"},required:!1,description:""},handleLoading:{type:{name:"func"},required:!1,description:""},loading:{type:{name:"object"},required:!1,description:""}}},ComponentForm.__docgenInfo={description:"",methods:[],displayName:"ComponentForm",props:{defaultValues:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""},defaultOptions:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""},handleSaveSuccess:{type:{name:"func"},required:!1,description:""},handleSaveError:{type:{name:"func"},required:!1,description:""},handleLoading:{type:{name:"func"},required:!1,description:""},loading:{type:{name:"object"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Drachma.Web/assets/react/views/google-shopping-settings/views/campaigns/components/ComponentForm.js"]={name:"ComponentForm",docgenInfo:ComponentForm.__docgenInfo,path:"src/Drachma.Web/assets/react/views/google-shopping-settings/views/campaigns/components/ComponentForm.js"});var ComponentEdit=function(props){var _useContext=Object(react.useContext)(GoogleShoppingSettingsContext.c),setup=_useContext.setup,handleAsync=_useContext.handleAsync,handleModalErrorActive=_useContext.handleModalErrorActive,handleNotificationActive=_useContext.handleNotificationActive,handleCampaignEnableTipActive=_useContext.handleCampaignEnableTipActive,apiCampaignEdit=_useContext.apiCampaignEdit,locale=_useContext.locale,_useContext2=Object(react.useContext)(GoogleShoppingSettingsContext.b),selectedCampaign=_useContext2.selectedCampaign,handleView=_useContext2.handleView,handleSelectedCampaign=_useContext2.handleSelectedCampaign,setupCampaigns=JSON.parse(setup).setupCampaigns,text=locale.text,handleRequestSingle=Object(hooks.k)().handleRequestSingle,targetCountrySelected=setupCampaigns.targetCountrySelected,_useState=Object(react.useState)(""),_useState2=slicedToArray_default()(_useState,2),campaignName=_useState2[0],setCampaignName=_useState2[1],_useState3=Object(react.useState)(""),_useState4=slicedToArray_default()(_useState3,2),budgetAmount=_useState4[0],setBudgetAmount=_useState4[1],_useState5=Object(react.useState)(targetCountrySelected),_useState6=slicedToArray_default()(_useState5,2),targetCountry=_useState6[0],setTargetCountry=_useState6[1],_useState7=Object(react.useState)([]),_useState8=slicedToArray_default()(_useState7,2),excludeCategories=_useState8[0],setExcludeCategories=_useState8[1],_useState9=Object(react.useState)([]),_useState10=slicedToArray_default()(_useState9,2),availableCategories=_useState10[0],setAvailableCategories=_useState10[1],_useState11=Object(react.useState)(!1),_useState12=slicedToArray_default()(_useState11,2),data=_useState12[0],setData=_useState12[1],_useState13=Object(react.useState)({}),_useState14=slicedToArray_default()(_useState13,2),loading=_useState14[0],setLoading=_useState14[1],create=props.create,handleRequestSuccess=function(response){var item=slicedToArray_default()(response.data.results,1)[0],hasCampaignName=item.campaignName,hasBudgetAmount=item.budgetAmount,hasTargetCountry=item.targetCountry,hasExcludeCategories=item.excludeCategories,hasAvailableCategories=item.availableCategories;hasCampaignName&&setCampaignName(hasCampaignName),hasBudgetAmount&&setBudgetAmount(hasBudgetAmount),hasTargetCountry&&setTargetCountry(hasTargetCountry),hasExcludeCategories&&setExcludeCategories(hasExcludeCategories),hasAvailableCategories&&setAvailableCategories(hasAvailableCategories),handleAsync(!1),setData(!0)},handleRequestError=function(_ref2){var errorMessage=_ref2.errorMessage;handleAsync(!1),handleModalErrorActive(errorMessage)};return Object(react.useEffect)(function(){handleAsync(!0),handleRequestSingle({url:apiCampaignEdit,params:{campaignId:create?0:selectedCampaign.id},method:"get",handleError:handleRequestError,handleSuccess:handleRequestSuccess})},[]),react_default.a.createElement(react_default.a.Fragment,null,!data&&react_default.a.createElement(components.P,null),data&&react_default.a.createElement(components_ComponentForm,{handleSaveSuccess:function(response){var feedback=response.feedback,id=response.data.id;handleAsync(!1),setLoading({save:!1,cancel:!1}),feedback?handleNotificationActive(feedback.message,"error"):(handleView(null,"list"),handleCampaignEnableTipActive(),handleSelectedCampaign({id:id}),handleNotificationActive(create?text.google_campaigns_create_notification_success:text.google_campaigns_save_notification_success,"success"))},handleSaveError:function(_ref){var errorMessage=_ref.errorMessage;handleAsync(!1),handleModalErrorActive(errorMessage)},handleLoading:function(type,value){var update={};update[type]=value,setLoading(update)},defaultValues:{campaignName:campaignName,budgetAmount:budgetAmount,targetCountry:targetCountry,excludeCategories:excludeCategories},defaultOptions:{availableCategories:availableCategories},loading:loading}))};ComponentEdit.propTypes={create:prop_types_default.a.bool};__webpack_exports__.default=ComponentEdit;ComponentEdit.__docgenInfo={description:"",methods:[],displayName:"ComponentEdit",props:{create:{type:{name:"bool"},required:!1,description:""}}},ComponentEdit.__docgenInfo={description:"",methods:[],displayName:"ComponentEdit",props:{create:{type:{name:"bool"},required:!1,description:""}}},ComponentEdit.__docgenInfo={description:"",methods:[],displayName:"ComponentEdit",props:{create:{type:{name:"bool"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Drachma.Web/assets/react/views/google-shopping-settings/views/campaigns/components/ComponentEdit.js"]={name:"ComponentEdit",docgenInfo:ComponentEdit.__docgenInfo,path:"src/Drachma.Web/assets/react/views/google-shopping-settings/views/campaigns/components/ComponentEdit.js"})}}]);
//# sourceMappingURL=13.56a47f2704e5245c1aef.bundle.js.map