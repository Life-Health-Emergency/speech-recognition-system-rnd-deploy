import{A as Yn,a as Ht,b as Se,c as jn,d as Hn,e as Ut,f as Un,g as zn,h as zt,i as Gn,j as Wn,k as qn,l as Ce,m as it,n as ot,o as rt,p as Me,q as Kn,r as Qn,s as Xn,t as Zn,u as st,v as ce,w as Gt,x as De,y as Ie,z as V}from"./chunk-MDLZQHMM.js";import{$ as ye,A as At,Aa as Lt,B as b,Ba as m,C as re,Ca as u,D as Pn,Da as de,E as Ye,Ea as v,F as g,Ga as $t,Ha as N,I as Ee,Ia as Rn,J as se,Ja as tt,K as $,Ka as Ln,L as j,La as nt,M as S,Ma as ue,N as Y,Na as ke,O as C,Oa as jt,P as O,Q as Nt,Ra as $n,S as G,T as xt,U as Tt,Ua as Jn,V as Vt,Va as at,W as Ft,X as kt,Y as f,Z as T,_ as M,a as d,aa as Pt,b as x,ba as Ot,c as An,ca as Bt,d as Mt,da as ve,e as Nn,ea as _e,f as xn,fa as ae,g as Tn,h as Vn,ha as On,i as I,ia as Q,j as Fn,k as F,ka as w,l as L,la as le,m as k,ma as J,n as c,na as Je,oa as H,p as It,pa as U,s as Xe,sa as Bn,t as be,ta as Rt,u as Ze,ua as et,v as oe,va as _,w as kn,wa as W,xa as ee,y as E,z as R,za as A}from"./chunk-TUPCA6IS.js";var bo=new k(""),yo=new k("");function oi(n){return n!=null}function ri(n){return Nt(n)?xn(n):n}function si(n){let t={};return n.forEach(e=>{t=e!=null?d(d({},t),e):t}),Object.keys(t).length===0?null:t}function ai(n,t){return t.map(e=>e(n))}function vo(n){return!n.validate}function li(n){return n.map(t=>vo(t)?t:e=>t.validate(e))}function _o(n){if(!n)return null;let t=n.filter(oi);return t.length==0?null:function(e){return si(ai(e,t))}}function Xt(n){return n!=null?_o(li(n)):null}function Co(n){if(!n)return null;let t=n.filter(oi);return t.length==0?null:function(e){let i=ai(e,t).map(ri);return Vn(i).pipe(Tn(si))}}function Zt(n){return n!=null?Co(li(n)):null}function ei(n,t){return n===null?[t]:Array.isArray(n)?[...n,t]:[n,t]}function Do(n){return n._rawValidators}function wo(n){return n._rawAsyncValidators}function Wt(n){return n?Array.isArray(n)?n:[n]:[]}function dt(n,t){return Array.isArray(n)?n.includes(t):n===t}function ti(n,t){let e=Wt(t);return Wt(n).forEach(o=>{dt(e,o)||e.push(o)}),e}function ni(n,t){return Wt(t).filter(e=>!dt(n,e))}var ut=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=Xt(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=Zt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control?.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}},$e=class extends ut{name;get formDirective(){return null}get path(){return null}},ct=class extends ut{_parent=null;name=null;valueAccessor=null},qt=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var di=(()=>{class n extends qt{constructor(e){super(e)}static \u0275fac=function(i){return new(i||n)(se($e,10))};static \u0275dir=S({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,o){i&2&&Rt("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},standalone:!1,features:[C]})}return n})();var Pe="VALID",lt="INVALID",Ae="PENDING",Oe="DISABLED",he=class{},ht=class extends he{value;source;constructor(t,e){super(),this.value=t,this.source=e}},Re=class extends he{pristine;source;constructor(t,e){super(),this.pristine=t,this.source=e}},Le=class extends he{touched;source;constructor(t,e){super(),this.touched=t,this.source=e}},Ne=class extends he{status;source;constructor(t,e){super(),this.status=t,this.source=e}},Kt=class extends he{source;constructor(t){super(),this.source=t}},Qt=class extends he{source;constructor(t){super(),this.source=t}};function Eo(n){return(Yt(n)?n.validators:n)||null}function So(n){return Array.isArray(n)?Xt(n):n||null}function Mo(n,t){return(Yt(t)?t.asyncValidators:n)||null}function Io(n){return Array.isArray(n)?Zt(n):n||null}function Yt(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function Ao(n,t,e){let i=n.controls;if(!(t?Object.keys(i):i).length)throw new I(1e3,"");if(!i[e])throw new I(1001,"")}function No(n,t,e){n._forEachChild((i,o)=>{if(e[o]===void 0)throw new I(-1002,"")})}var je=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,e){this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return m(this.statusReactive)}set status(t){m(()=>this.statusReactive.set(t))}_status=u(()=>this.statusReactive());statusReactive=E(void 0);get valid(){return this.status===Pe}get invalid(){return this.status===lt}get pending(){return this.status===Ae}get disabled(){return this.status===Oe}get enabled(){return this.status!==Oe}errors;get pristine(){return m(this.pristineReactive)}set pristine(t){m(()=>this.pristineReactive.set(t))}_pristine=u(()=>this.pristineReactive());pristineReactive=E(!0);get dirty(){return!this.pristine}get touched(){return m(this.touchedReactive)}set touched(t){m(()=>this.touchedReactive.set(t))}_touched=u(()=>this.touchedReactive());touchedReactive=E(!1);get untouched(){return!this.touched}_events=new Nn;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(ti(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(ti(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(ni(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(ni(t,this._rawAsyncValidators))}hasValidator(t){return dt(this._rawValidators,t)}hasAsyncValidator(t){return dt(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let i=t.sourceControl??this;t.onlySelf||this._parent?.markAsTouched(x(d({},t),{sourceControl:i})),e&&t.emitEvent!==!1&&this._events.next(new Le(!0,i))}markAllAsDirty(t={}){this.markAsDirty({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(t))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=t.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:i})}),t.onlySelf||this._parent?._updateTouched(t,i),e&&t.emitEvent!==!1&&this._events.next(new Le(!1,i))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let i=t.sourceControl??this;t.onlySelf||this._parent?.markAsDirty(x(d({},t),{sourceControl:i})),e&&t.emitEvent!==!1&&this._events.next(new Re(!1,i))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=t.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),t.onlySelf||this._parent?._updatePristine(t,i),e&&t.emitEvent!==!1&&this._events.next(new Re(!0,i))}markAsPending(t={}){this.status=Ae;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Ne(this.status,e)),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.markAsPending(x(d({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=Oe,this.errors=null,this._forEachChild(o=>{o.disable(x(d({},t),{onlySelf:!0}))}),this._updateValue();let i=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new ht(this.value,i)),this._events.next(new Ne(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(x(d({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=Pe,this._forEachChild(i=>{i.enable(x(d({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(x(d({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(t,e){t.onlySelf||(this._parent?.updateValueAndValidity(t),t.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Pe||this.status===Ae)&&this._runAsyncValidator(i,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new ht(this.value,e)),this._events.next(new Ne(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.updateValueAndValidity(x(d({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Oe:Pe}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=Ae,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:t!==!1};let i=ri(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,o)=>i&&i._find(o),this)}getError(t,e){let i=e?this.get(e):this;return i?.errors?i.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,i){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||i)&&this._events.next(new Ne(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,i)}_initObservables(){this.valueChanges=new oe,this.statusChanges=new oe}_calculateStatus(){return this._allControlsDisabled()?Oe:this.errors?lt:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Ae)?Ae:this._anyControlsHaveStatus(lt)?lt:Pe}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let i=!this._anyControlsDirty(),o=this.pristine!==i;this.pristine=i,t.onlySelf||this._parent?._updatePristine(t,e),o&&this._events.next(new Re(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new Le(this.touched,e)),t.onlySelf||this._parent?._updateTouched(t,e)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){Yt(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=So(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=Io(this._rawAsyncValidators)}},He=class extends je{constructor(t,e,i){super(Eo(e),Mo(i,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,i={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,i={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){No(this,!0,t),Object.keys(t).forEach(i=>{Ao(this,!0,i),this.controls[i].setValue(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(i=>{let o=this.controls[i];o&&o.patchValue(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((i,o)=>{i.reset(t?t[o]:null,x(d({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Qt(this))}getRawValue(){return this._reduceChildren({},(t,e,i)=>(t[i]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&t(i,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&t(i))return!0;return!1}_reduceValue(){let t={};return this._reduceChildren(t,(e,i,o)=>((i.enabled||this.disabled)&&(e[o]=i.value),e))}_reduceChildren(t,e){let i=t;return this._forEachChild((o,r)=>{i=e(i,o,r)}),i}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}};var ui=new k("",{factory:()=>Jt}),Jt="always";function xo(n,t,e=Jt){ci(n,t),t.valueAccessor.writeValue(n.value),(n.disabled||e==="always")&&t.valueAccessor.setDisabledState?.(n.disabled),Vo(n,t),ko(n,t),Fo(n,t),To(n,t)}function ii(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function To(n,t){if(t.valueAccessor.setDisabledState){let e=i=>{t.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function ci(n,t){let e=Do(n);t.validator!==null?n.setValidators(ei(e,t.validator)):typeof e=="function"&&n.setValidators([e]);let i=wo(n);t.asyncValidator!==null?n.setAsyncValidators(ei(i,t.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let o=()=>n.updateValueAndValidity();ii(t._rawValidators,o),ii(t._rawAsyncValidators,o)}function Vo(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&hi(n,t)})}function Fo(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&hi(n,t),n.updateOn!=="submit"&&n.markAsTouched()})}function hi(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function ko(n,t){let e=(i,o)=>{t.valueAccessor.writeValue(i),o&&t.viewToModelUpdate(i)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function Po(n,t){n==null,ci(n,t)}function Oo(n,t){n._syncPendingControls(),t.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}var Bo={provide:$e,useExisting:Fn(()=>en)},Be=Promise.resolve(),en=(()=>{class n extends $e{callSetDisabledState;get submitted(){return m(this.submittedReactive)}_submitted=u(()=>this.submittedReactive());submittedReactive=E(!1);_directives=new Set;form;ngSubmit=new oe;options;constructor(e,i,o){super(),this.callSetDisabledState=o,this.form=new He({},Xt(e),Zt(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Be.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),xo(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Be.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Be.then(()=>{let i=this._findContainer(e.path),o=new He({});Po(o,e),i.registerControl(e.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Be.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){Be.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Oo(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Kt(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||n)(se(bo,10),se(yo,10),se(ui,8))};static \u0275dir=S({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,o){i&1&&Q("submit",function(s){return o.onSubmit(s)})("reset",function(){return o.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[A([Bo]),C]})}return n})();var pi=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=S({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})();var Ro=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=j({type:n});static \u0275inj=L({})}return n})();var fi=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:ui,useValue:e.callSetDisabledState??Jt}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=j({type:n});static \u0275inj=L({imports:[Ro]})}return n})();var tn=0;function $o(){return tn}function pe(n,t){return(...e)=>{try{return tn=t,n(...e)}finally{tn=0}}}function jo(n){return!n}function gi(n){return n}function X(n){return Array.isArray(n)}function xe(n){return(typeof n=="object"||typeof n=="function")&&n!=null}var we=Symbol(),_t=Symbol(),ze=class{predicates;fns=[];constructor(t){this.predicates=t}push(t){this.fns.push(mi(this.predicates,t))}mergeIn(t){let e=this.predicates?t.fns.map(i=>mi(this.predicates,i)):t.fns;this.fns.push(...e)}},ft=class extends ze{get defaultValue(){return!1}compute(t){return this.fns.some(e=>{let i=e(t);return i&&i!==_t})}},Te=class n extends ze{ignore;static ignoreNull(t){return new n(t,e=>e===null)}constructor(t,e){super(t),this.ignore=e}get defaultValue(){return[]}compute(t){return this.fns.reduce((e,i)=>{let o=i(t);return o===void 0||o===_t?e:X(o)?[...e,...this.ignore?o.filter(r=>!this.ignore(r)):o]:this.ignore&&this.ignore(o)?e:[...e,o]},[])}},nn=class extends Te{constructor(t){super(t,void 0)}},on=class extends ze{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(t,e){super(t),this.key=e}compute(t){if(this.fns.length===0)return this.key.reducer.getInitial();let e=this.key.reducer.getInitial();for(let i=0;i<this.fns.length;i++){let o=this.fns[i](t);o!==_t&&(e=this.key.reducer.reduce(e,o))}return e}};function mi(n,t){return n.length===0?t:e=>{for(let i of n){let o=e.stateOf(i.path),r=m(o.structure.pathKeys).length-i.depth;for(let s=0;s<r;s++)o=o.structure.parent;if(!i.fn(o.context))return _t}return t(e)}}var Ve=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(t){this.predicates=t,this.hidden=new ft(t),this.disabledReasons=new nn(t),this.readonly=new ft(t),this.syncErrors=Te.ignoreNull(t),this.syncTreeErrors=Te.ignoreNull(t),this.asyncErrors=Te.ignoreNull(t)}hasMetadata(t){return this.metadata.has(t)}getMetadataKeys(){return this.metadata.keys()}getMetadata(t){return this.metadata.has(t)||this.metadata.set(t,new on(this.predicates,t)),this.metadata.get(t)}mergeIn(t){this.hidden.mergeIn(t.hidden),this.disabledReasons.mergeIn(t.disabledReasons),this.readonly.mergeIn(t.readonly),this.syncErrors.mergeIn(t.syncErrors),this.syncTreeErrors.mergeIn(t.syncTreeErrors),this.asyncErrors.mergeIn(t.asyncErrors);for(let e of t.getMetadataKeys()){let i=t.metadata.get(e);this.getMetadata(e).mergeIn(i)}}},gt=class{depth;constructor(t){this.depth=t}build(){return new mt(this,[],0)}},Fe=class n extends gt{constructor(t){super(t)}current;all=[];addHiddenRule(t){this.getCurrent().addHiddenRule(t)}addDisabledReasonRule(t){this.getCurrent().addDisabledReasonRule(t)}addReadonlyRule(t){this.getCurrent().addReadonlyRule(t)}addSyncErrorRule(t){this.getCurrent().addSyncErrorRule(t)}addSyncTreeErrorRule(t){this.getCurrent().addSyncTreeErrorRule(t)}addAsyncErrorRule(t){this.getCurrent().addAsyncErrorRule(t)}addMetadataRule(t,e){this.getCurrent().addMetadataRule(t,e)}getChild(t){if(t===we){let e=this.getCurrent().children;e.size>(e.has(we)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(t)}hasLogic(t){return this===t?!0:this.all.some(({builder:e})=>e.hasLogic(t))}mergeIn(t,e){e?this.all.push({builder:t,predicate:{fn:pe(e.fn,this.depth),path:e.path}}):this.all.push({builder:t}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new Ge(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new n(0)}},Ge=class extends gt{logic=new Ve([]);children=new Map;constructor(t){super(t)}addHiddenRule(t){this.logic.hidden.push(pe(t,this.depth))}addDisabledReasonRule(t){this.logic.disabledReasons.push(pe(t,this.depth))}addReadonlyRule(t){this.logic.readonly.push(pe(t,this.depth))}addSyncErrorRule(t){this.logic.syncErrors.push(pe(t,this.depth))}addSyncTreeErrorRule(t){this.logic.syncTreeErrors.push(pe(t,this.depth))}addAsyncErrorRule(t){this.logic.asyncErrors.push(pe(t,this.depth))}addMetadataRule(t,e){this.logic.getMetadata(t).push(pe(e,this.depth))}getChild(t){return this.children.has(t)||this.children.set(t,new Fe(this.depth+1)),this.children.get(t)}hasLogic(t){return this===t}},mt=class n{builder;predicates;depth;logic;constructor(t,e,i){this.builder=t,this.predicates=e,this.depth=i,this.logic=t?Ho(t,e,i):new Ve([])}getChild(t){let e=this.builder?vi(this.builder,t):[];if(e.length===0)return new n(void 0,[],this.depth+1);if(e.length===1){let{builder:i,predicates:o}=e[0];return new n(i,[...this.predicates,...o.map(r=>sn(r,this.depth))],this.depth+1)}else{let i=e.map(({builder:o,predicates:r})=>new n(o,[...this.predicates,...r.map(s=>sn(s,this.depth))],this.depth+1));return new rn(i)}}hasLogic(t){return this.builder?.hasLogic(t)??!1}},rn=class n{all;logic;constructor(t){this.all=t,this.logic=new Ve([]);for(let e of t)this.logic.mergeIn(e.logic)}getChild(t){return new n(this.all.flatMap(e=>e.getChild(t)))}hasLogic(t){return this.all.some(e=>e.hasLogic(t))}};function vi(n,t){if(n instanceof Fe)return n.all.flatMap(({builder:e,predicate:i})=>{let o=vi(e,t);return i?o.map(({builder:r,predicates:s})=>({builder:r,predicates:[...s,i]})):o});if(n instanceof Ge)return[...t!==we&&n.children.has(we)?[{builder:n.getChild(we),predicates:[]}]:[],...n.children.has(t)?[{builder:n.getChild(t),predicates:[]}]:[]];throw new I(1909,!1)}function Ho(n,t,e){let i=new Ve(t);if(n instanceof Fe){let o=n.all.map(({builder:r,predicate:s})=>new mt(r,s?[...t,sn(s,e)]:t,e));for(let r of o)i.mergeIn(r.logic)}else if(n instanceof Ge)i.mergeIn(n.logic);else throw new I(1909,!1);return i}function sn(n,t){return x(d({},n),{depth:t})}var _i=Symbol("PATH"),te=class n{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,Uo);logicBuilder;constructor(t,e,i,o){this.keys=t,this.parent=i,this.keyInParent=o,this.root=e??this,i||(this.logicBuilder=Fe.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(t){return this.children.has(t)||this.children.set(t,new n([...this.keys,t],this.root,this,t)),this.children.get(t)}mergeIn(t,e){let i=t.compile();this.builder.mergeIn(i.builder,e)}static unwrapFieldPath(t){return t[_i]}static newRoot(){return new n([],void 0,void 0,void 0)}},Uo={get(n,t){return t===_i?n:n.getChild(t).fieldPathProxy}},pt,Ue=new Map,bt=class n{schemaFn;constructor(t){this.schemaFn=t}compile(){if(Ue.has(this))return Ue.get(this);let t=te.newRoot();Ue.set(this,t);let e=pt;try{pt=t,this.schemaFn(t.fieldPathProxy)}finally{pt=e}return t}static create(t){return t instanceof n?t:new n(t)}static rootCompile(t){try{return Ue.clear(),t===void 0?te.newRoot():t instanceof n?t.compile():new n(t).compile()}finally{Ue.clear()}}};function zo(n){return n instanceof bt||typeof n=="function"}function bn(n){if(pt!==te.unwrapFieldPath(n).root)throw new I(1908,!1)}function yn(n,t,e){return bn(n),te.unwrapFieldPath(n).builder.addMetadataRule(t,e),t}var fe={list(){return{reduce:(n,t)=>t===void 0?n:[...n,t],getInitial:()=>[]}},min(){return{reduce:(n,t)=>n===void 0||t===void 0?n??t:Math.min(n,t),getInitial:()=>{}}},max(){return{reduce:(n,t)=>n===void 0||t===void 0?n??t:Math.max(n,t),getInitial:()=>{}}},or(){return{reduce:(n,t)=>n||t,getInitial:()=>!1}},and(){return{reduce:(n,t)=>n&&t,getInitial:()=>!0}},override:Go};function Go(n){return{reduce:(t,e)=>e,getInitial:()=>n?.()}}var yt=class{reducer;create;brand;constructor(t,e){this.reducer=t,this.create=e}};function ne(n){return new yt(n??fe.override())}var vn=ne(fe.or()),Ci=ne(fe.max()),Di=ne(fe.min()),wi=ne(fe.max()),Ei=ne(fe.min()),Si=ne(fe.list());function Wo(n){return n.errors().length>0?"invalid":n.pending()?"unknown":"valid"}var an=class{node;constructor(t){this.node=t}rawSyncTreeErrors=u(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]]);syncErrors=u(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...qo(this.node.submitState.submissionErrors())]);syncValid=u(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(t,e)=>e&&t.validationState.syncValid(),jo));syncTreeErrors=u(()=>this.rawSyncTreeErrors().filter(t=>t.fieldTree===this.node.fieldTree));rawAsyncErrors=u(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]]);asyncErrors=u(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(t=>t==="pending"||t.fieldTree===this.node.fieldTree));parseErrors=u(()=>this.node.formFieldBindings().flatMap(t=>t.parseErrors()));errors=u(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(t=>t!=="pending")]);errorSummary=u(()=>{let t=this.node.structure.reduceChildren(this.errors(),(e,i)=>[...i,...e.errorSummary()]);return m(()=>t.sort(Ko)),t});pending=u(()=>this.node.structure.reduceChildren(this.asyncErrors().includes("pending"),(t,e)=>e||t.validationState.asyncErrors().includes("pending")));status=u(()=>{if(this.shouldSkipValidation())return"valid";let t=Wo(this);return this.node.structure.reduceChildren(t,(e,i)=>i==="invalid"||e.validationState.status()==="invalid"?"invalid":i==="unknown"||e.validationState.status()==="unknown"?"unknown":"valid",e=>e==="invalid")});valid=u(()=>this.status()==="valid");invalid=u(()=>this.status()==="invalid");shouldSkipValidation=u(()=>this.node.hidden()||this.node.disabled()||this.node.readonly())};function qo(n){return n===void 0?[]:X(n)?n:[n]}function _n(n,t){if(X(n))for(let e of n)e.fieldTree??=t;else n&&(n.fieldTree??=t);return n}function bi(n){return n.formField?n.formField.element:n.fieldTree().formFieldBindings().reduce((t,e)=>!t||!e.element?t??e.element:t.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e.element:t,void 0)}function Ko(n,t){let e=bi(n),i=bi(t);return e===i?0:e===void 0||i===void 0?e===void 0?1:-1:e.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var ln=ne(),dn=class{node;cache=new WeakMap;constructor(t){this.node=t}resolve(t){if(!this.cache.has(t)){let e=u(()=>{let i=te.unwrapFieldPath(t),o=this.node,r=$o();for(;r>0||!o.structure.logic.hasLogic(i.root.builder);)if(r--,o=o.structure.parent,o===void 0)throw new I(1900,!1);for(let s of i.keys)if(o=o.structure.getChild(s),o===void 0)throw new I(1901,!1);return o.fieldTree});this.cache.set(t,e)}return this.cache.get(t)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=u(()=>{let t=this.key();if(!X(m(this.node.structure.parent.value)))throw new I(1906,!1);return Number(t)});fieldTreeOf=t=>this.resolve(t);stateOf=t=>this.resolve(t)();valueOf=t=>{let e=this.resolve(t)().value();if(e instanceof je)throw new I(1907,!1);return e}},un=class{node;metadata=new Map;constructor(t){this.node=t;for(let e of this.node.logicNode.logic.getMetadataKeys())if(e.create){let i=this.node.logicNode.logic.getMetadata(e),o=m(()=>It(this.node.structure.injector,()=>e.create(u(()=>i.compute(this.node.context)))));this.metadata.set(e,o)}}get(t){if(this.has(t)&&!this.metadata.has(t)){if(t.create)throw new I(1912,!1);let e=this.node.logicNode.logic.getMetadata(t);this.metadata.set(t,u(()=>e.compute(this.node.context)))}return this.metadata.get(t)}has(t){return this.node.logicNode.logic.hasMetadata(t)}},Qo={get(n,t,e){let i=n(),o=i.structure.getChild(t);if(o!==void 0)return o.fieldTree;let r=m(i.value);if(X(r)){if(t==="length")return i.value().length;if(t===Symbol.iterator)return()=>(i.value(),Array.prototype[Symbol.iterator].apply(i.fieldTree))}if(xe(r)&&t===Symbol.iterator)return function*(){for(let s in e)yield[s,e[s]]}},getOwnPropertyDescriptor(n,t){let e=m(n().value),i=Reflect.getOwnPropertyDescriptor(e,t);return i&&!i.configurable&&(i.configurable=!0),i},ownKeys(n){let t=m(n().value);return typeof t=="object"&&t!==null?Reflect.ownKeys(t):[]}};function Xo(n,t){let e=u(()=>n()[t()]);return e[Mt]=n[Mt],e.set=i=>{n.update(o=>Zo(o,i,t()))},e.update=i=>{e.set(i(m(e)))},e.asReadonly=()=>e,e}function Zo(n,t,e){if(X(n)){let i=[...n];return i[e]=t,i}else return x(d({},n),{[e]:t})}var vt=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;get injector(){return this._injector??=be.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(t,e,i){this.logic=t,this.node=e,this.createChildNode=i}children(){let t=this.childrenMap();return t===void 0?[]:Array.from(t.byPropertyKey.values()).map(e=>m(e.reader))}getChild(t){let e=t.toString(),i=m(this.childrenMap)?.byPropertyKey.get(e)?.reader;return i||(i=this.createReader(e)),i()}reduceChildren(t,e,i){let o=this.childrenMap();if(!o)return t;let r=t;for(let s of o.byPropertyKey.values()){if(i?.(r))break;r=e(m(s.reader),r)}return r}destroy(){this.injector.destroy()}createKeyInParent(t,e,i){if(t.kind==="root")return Mi;if(e===void 0){let o=i;return u(()=>{if(this.parent.structure.getChild(o)!==this.node)throw new I(1902,!1);return o})}else{let o=i;return u(()=>{let r=this.parent.structure.value();if(!X(r))throw new I(1903,!1);let s=r[o];if(xe(s)&&s.hasOwnProperty(this.parent.structure.identitySymbol)&&s[this.parent.structure.identitySymbol]===e)return o;for(let a=0;a<r.length;a++){let l=r[a];if(xe(l)&&l.hasOwnProperty(this.parent.structure.identitySymbol)&&l[this.parent.structure.identitySymbol]===e)return o=a.toString()}throw new I(1904,!1)})}}createChildrenMap(){return de({source:this.value,computation:(t,e)=>{if(!xe(t))return;let i=e?.value??{byPropertyKey:new Map},o,r=X(t);i!==void 0&&(r?o=Jo(i,t,this.identitySymbol):o=er(i,t));for(let s of Object.keys(t)){let a,l=t[s];if(l===void 0){i.byPropertyKey.has(s)&&(o??=d({},i),o.byPropertyKey.delete(s));continue}r&&xe(l)&&!X(l)&&(a=l[this.identitySymbol]??=Symbol(""));let h;a&&(i.byTrackingKey?.has(a)||(o??=d({},i),o.byTrackingKey??=new Map,o.byTrackingKey.set(a,this.createChildNode(s,a,r))),h=(o??i).byTrackingKey.get(a));let p=i.byPropertyKey.get(s);p===void 0?(o??=d({},i),o.byPropertyKey.set(s,{reader:this.createReader(s),node:h??this.createChildNode(s,a,r)})):h&&h!==p.node&&(o??=d({},i),p.node=h)}return o??i}})}createReader(t){return u(()=>this.childrenMap()?.byPropertyKey.get(t)?.node)}},cn=class extends vt{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return Yo}get keyInParent(){return Mi}childrenMap;constructor(t,e,i,o,r){super(e,t,r),this.fieldManager=i,this.value=o,this.childrenMap=this.createChildrenMap()}},hn=class extends vt{logic;parent;root;pathKeys;keyInParent;value;childrenMap;get fieldManager(){return this.root.structure.fieldManager}constructor(t,e,i,o,r,s){super(e,t,s),this.logic=e,this.parent=i,this.root=this.parent.structure.root,this.keyInParent=this.createKeyInParent({kind:"child",parent:i,pathNode:void 0,logic:e,initialKeyInParent:r,identityInParent:o,fieldAdapter:void 0},o,r),this.pathKeys=u(()=>[...i.structure.pathKeys(),this.keyInParent()]),this.value=Xo(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var Yo=u(()=>[]),Mi=u(()=>{throw new I(1905,!1)});function Jo(n,t,e){let i,o=new Set(n.byPropertyKey.keys()),r=new Set(n.byTrackingKey?.keys());for(let s=0;s<t.length;s++){let a=t[s];o.delete(s.toString()),xe(a)&&a.hasOwnProperty(e)&&r.delete(a[e])}if(o.size>0){i??=d({},n);for(let s of o)i.byPropertyKey.delete(s)}if(r.size>0){i??=d({},n);for(let s of r)i.byTrackingKey?.delete(s)}return i}function er(n,t){let e;for(let i of n.byPropertyKey.keys())t.hasOwnProperty(i)||(e??=d({},n),e.byPropertyKey.delete(i));return e}var pn=class{node;selfSubmitting=E(!1);submissionErrors;constructor(t){this.node=t,this.submissionErrors=de({source:this.node.structure.value,computation:()=>[]})}submitting=u(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))},We=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new dn(this)}fieldProxy=new Proxy(()=>this,Qo);pathNode;constructor(t){this.pathNode=t.pathNode,this.fieldAdapter=t.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,t),this.validationState=this.fieldAdapter.createValidationState(this,t),this.nodeState=this.fieldAdapter.createNodeState(this,t),this.metadataState=new un(this),this.submitState=new pn(this),this.controlValue=this.controlValueSignal()}focusBoundControl(t){this.getBindingForFocus()?.focus(t)}getBindingForFocus(){let t=this.formFieldBindings().filter(e=>e.focus!==void 0).reduce(yi,void 0);return t||this.structure.children().map(e=>e.getBindingForFocus()).reduce(yi,void 0)}pendingSync=de({source:()=>this.value(),computation:(t,e)=>{e?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){return this.metadata(Di)}get maxLength(){return this.metadata(Ei)}get min(){return this.metadata(Ci)}get minLength(){return this.metadata(wi)}get pattern(){return this.metadata(Si)??tr}get required(){return this.metadata(vn)??nr}metadata(t){return this.metadataState.get(t)}hasMetadata(t){return this.metadataState.has(t)}markAsTouched(){m(()=>{this.nodeState.markAsTouched(),this.flushSync()})}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(t){m(()=>this._reset(t))}_reset(t){t!==void 0&&this.value.set(t),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let e of this.structure.children())e._reset()}controlValueSignal(){let t=de(this.value),{set:e,update:i}=t;return t.set=o=>{e(o),this.markAsDirty(),this.debounceSync()},t.update=o=>{i(o),this.markAsDirty(),this.debounceSync()},t}sync(){this.value.set(this.controlValue())}flushSync(){let t=this.pendingSync();t&&!t.signal.aborted&&(t.abort(),this.sync())}async debounceSync(){let t=m(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(t){let e=new AbortController,i=t(e.signal);if(i&&(this.pendingSync.set(e),await i,e.signal.aborted))return}this.sync()}static newRoot(t,e,i,o){return o.newRoot(t,e,i,o)}createStructure(t){return t.kind==="root"?new cn(this,t.logic,t.fieldManager,t.value,this.newChild.bind(this)):new hn(this,t.logic,t.parent,t.identityInParent,t.initialKeyInParent,this.newChild.bind(this))}newChild(t,e,i){let o,r;return i?(o=this.pathNode.getChild(we),r=this.structure.logic.getChild(we)):(o=this.pathNode.getChild(t),r=this.structure.logic.getChild(t)),this.fieldAdapter.newChild({kind:"child",parent:this,pathNode:o,logic:r,initialKeyInParent:t,identityInParent:e,fieldAdapter:this.fieldAdapter})}},tr=u(()=>[]),nr=u(()=>!1);function yi(n,t){return n?t&&n.element.compareDocumentPosition(t.element)&Node.DOCUMENT_POSITION_PRECEDING?t:n:t}var fn=class{node;selfTouched=E(!1);selfDirty=E(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=E([]);constructor(t){this.node=t}dirty=u(()=>{let t=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(t,(e,i)=>i||e.nodeState.dirty(),gi)});touched=u(()=>{let t=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(t,(e,i)=>i||e.nodeState.touched(),gi)});disabledReasons=u(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)]);disabled=u(()=>!!this.disabledReasons().length);readonly=u(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=u(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=u(()=>{let t=this.node.structure.parent;return t?`${t.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=u(()=>{if(this.node.logicNode.logic.hasMetadata(ln)){let e=this.node.logicNode.logic.getMetadata(ln).compute(this.node.context);if(e)return i=>e(this.node.context,i)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=u(()=>this.hidden()||this.disabled()||this.readonly())},gn=class{newRoot(t,e,i,o){return new We({kind:"root",fieldManager:t,value:e,pathNode:i,logic:i.builder.build(),fieldAdapter:o})}newChild(t){return new We(t)}createNodeState(t){return new fn(t)}createValidationState(t){return new an(t)}createStructure(t,e){return t.createStructure(e)}},mn=class{injector;rootName;submitOptions;constructor(t,e,i){this.injector=t,this.rootName=e??`${this.injector.get(Pn)}.form${ir++}`,this.submitOptions=i}structures=new Set;createFieldManagementEffect(t){R(()=>{let e=new Set;this.markStructuresLive(t,e);for(let i of this.structures)e.has(i)||(this.structures.delete(i),m(()=>i.destroy()))},{injector:this.injector})}markStructuresLive(t,e){e.add(t);for(let i of t.children())this.markStructuresLive(i.structure,e)}},ir=0;function or(n){let t,e,i;return n.length===3?[t,e,i]=n:n.length===2?zo(n[1])?[t,e]=n:[t,i]=n:[t]=n,[t,e,i]}function Cn(...n){let[t,e,i]=or(n),o=i?.injector??c(be),r=It(o,()=>bt.rootCompile(e)),s=new mn(o,i?.name,i?.submission),a=i?.adapter??new gn,l=We.newRoot(s,t,r,a);return s.createFieldManagementEffect(l.structure),l.fieldTree}async function Ii(n,t){let e=m(n),i=t===void 0?e.structure.root.fieldProxy:n,o={root:e.structure.root.fieldProxy,submitted:n};t=typeof t=="function"?{action:t}:t??e.structure.fieldManager.submitOptions;let r=t?.action;if(!r)throw new I(1915,!1);let s=t?.onInvalid,a=t?.ignoreValidators??"pending",l=!0;m(()=>{Ai(e),a==="none"?l=e.valid():a==="pending"&&(l=!e.invalid())});try{if(l){e.submitState.selfSubmitting.set(!0);let h=await m(()=>r?.(i,o));return h&&rr(e,h),!h||X(h)&&h.length===0}else m(()=>s?.(i,o));return!1}finally{e.submitState.selfSubmitting.set(!1)}}function Ai(n){if(!n.validationState.shouldSkipValidation()){n.markAsTouched();for(let t of n.structure.children())Ai(t)}}function rr(n,t){X(t)||(t=[t]);let e=new Map;for(let i of t){let o=_n(i,n.fieldTree),r=o.fieldTree(),s=e.get(r);s||(s=[],e.set(r,s)),s.push(o)}for(let[i,o]of e)i.submitState.submissionErrors.set(o)}function Ct(n,t){return n instanceof Function?n(t):n}function Ni(n){return typeof n=="number"?isNaN(n):n===""||n===!1||n==null}function xi(n,t){bn(n),te.unwrapFieldPath(n).builder.addSyncErrorRule(i=>_n(t(i),i.fieldTree))}function sr(n){return new Dn(n)}function ar(n){return new wn(n)}var Dt=class{__brand=void 0;kind="";fieldTree;message;constructor(t){t&&Object.assign(this,t)}},Dn=class extends Dt{kind="required"};var wn=class extends Dt{kind="email"};var lr=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;function Ti(n,t){xi(n,e=>{if(!Ni(e.value())&&!lr.test(e.value()))return t?.error?Ct(t.error,e):ar({message:Ct(t?.message,e)})})}function En(n,t){let e=yn(n,ne(),i=>t?.when?t.when(i):!0);yn(n,vn,({state:i})=>i.metadata(e)()),xi(n,i=>{if(i.state.metadata(e)()&&Ni(i.value()))return t?.error?Ct(t.error,i):sr({message:Ct(t?.message,i)})})}var Vi=(()=>{class n{fieldTree=v.required({alias:"formRoot"});onSubmit(e){e.preventDefault(),Ii(this.fieldTree())}static \u0275fac=function(i){return new(i||n)};static \u0275dir=S({type:n,selectors:[["form","formRoot",""]],hostAttrs:["novalidate",""],hostBindings:function(i,o){i&1&&Q("submit",function(s){return o.onSubmit(s)})},inputs:{fieldTree:[1,"formRoot","fieldTree"]}})}return n})();function ge(...n){if(n){let t=[];for(let e=0;e<n.length;e++){let i=n[e];if(!i)continue;let o=typeof i;if(o==="string"||o==="number")t.push(i);else if(o==="object"){let r=Array.isArray(i)?[ge(...i)]:Object.entries(i).map(([s,a])=>a?s:void 0);t=r.length?t.concat(r.filter(s=>!!s)):t}}return t.join(" ").trim()}}var dr=Object.defineProperty,Fi=Object.getOwnPropertySymbols,ur=Object.prototype.hasOwnProperty,cr=Object.prototype.propertyIsEnumerable,ki=(n,t,e)=>t in n?dr(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Pi=(n,t)=>{for(var e in t||(t={}))ur.call(t,e)&&ki(n,e,t[e]);if(Fi)for(var e of Fi(t))cr.call(t,e)&&ki(n,e,t[e]);return n};function Oi(...n){if(n){let t=[];for(let e=0;e<n.length;e++){let i=n[e];if(!i)continue;let o=typeof i;if(o==="string"||o==="number")t.push(i);else if(o==="object"){let r=Array.isArray(i)?[Oi(...i)]:Object.entries(i).map(([s,a])=>a?s:void 0);t=r.length?t.concat(r.filter(s=>!!s)):t}}return t.join(" ").trim()}}function hr(n){return typeof n=="function"&&"call"in n&&"apply"in n}function pr({skipUndefined:n=!1},...t){return t?.reduce((e,i={})=>{for(let o in i){let r=i[o];if(!(n&&r===void 0))if(o==="style")e.style=Pi(Pi({},e.style),i.style);else if(o==="class"||o==="className")e[o]=Oi(e[o],i[o]);else if(hr(r)){let s=e[o];e[o]=s?(...a)=>{s(...a),r(...a)}:r}else e[o]=r}return e},{})}function Sn(...n){return pr({skipUndefined:!1},...n)}var wt={};function qe(n="pui_id_"){return Object.hasOwn(wt,n)||(wt[n]=0),wt[n]++,`${n}${wt[n]}`}var Bi=(()=>{class n extends V{name="common";static \u0275fac=(()=>{let e;return function(o){return(e||(e=b(n)))(o||n)}})();static \u0275prov=F({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Z=new k("PARENT_INSTANCE"),B=(()=>{class n{document=c(Ze);platformId=c(Ye);el=c(re);injector=c(be);cd=c($t);renderer=c(Ee);config=c(Yn);$parentInstance=c(Z,{optional:!0,skipSelf:!0})??void 0;baseComponentStyle=c(Bi);baseStyle=c(V);scopedStyleEl;parent=this.$params.parent;cn=ge;_themeScopedListener;themeChangeListenerMap=new Map;dt=v();unstyled=v();pt=v();ptOptions=v();$attrSelector=qe("pc");get $name(){return this.componentName||"UnknownComponent"}get $hostName(){return this.hostName}get $el(){return this.el?.nativeElement}directivePT=E(void 0);directiveUnstyled=E(void 0);$unstyled=u(()=>this.unstyled()??this.directiveUnstyled()??this.config?.unstyled()??!1);$pt=u(()=>ot(this.pt()||this.directivePT(),this.$params));get $globalPT(){return this._getPT(this.config?.pt(),void 0,e=>ot(e,this.$params))}get $defaultPT(){return this._getPT(this.config?.pt(),void 0,e=>this._getOptionValue(e,this.$hostName||this.$name,this.$params)||ot(e,this.$params))}get $style(){return d(d({theme:void 0,css:void 0,classes:void 0,inlineStyles:void 0},(this._getHostInstance(this)||{}).$style),this._componentStyle)}get $styleOptions(){return{nonce:this.config?.csp().nonce}}get $params(){let e=this._getHostInstance(this)||this.$parentInstance;return{instance:this,parent:{instance:e}}}onInit(){}onChanges(e){}onDoCheck(){}onAfterContentInit(){}onAfterContentChecked(){}onAfterViewInit(){}onAfterViewChecked(){}onDestroy(){}constructor(){R(e=>{this.document&&!jt(this.platformId)&&(this.dt()?(this._loadScopedThemeStyles(this.dt()),this._themeScopedListener=()=>this._loadScopedThemeStyles(this.dt()),this._themeChangeListener("_themeScopedListener",this._themeScopedListener)):this._unloadScopedThemeStyles()),e(()=>{this._offThemeChangeListener("_themeScopedListener")})}),R(e=>{this.document&&!jt(this.platformId)&&(this.$unstyled()||(this._loadCoreStyles(),this._themeChangeListener("_loadCoreStyles",this._loadCoreStyles))),e(()=>{this._offThemeChangeListener("_loadCoreStyles")})}),this._hook("onBeforeInit")}ngOnInit(){this._loadCoreStyles(),this._loadStyles(),this.onInit(),this._hook("onInit")}ngOnChanges(e){this.onChanges(e),this._hook("onChanges",e)}ngDoCheck(){this.onDoCheck(),this._hook("onDoCheck")}ngAfterContentInit(){this.onAfterContentInit(),this._hook("onAfterContentInit")}ngAfterContentChecked(){this.onAfterContentChecked(),this._hook("onAfterContentChecked")}ngAfterViewInit(){this.$el?.setAttribute(this.$attrSelector,""),this.onAfterViewInit(),this._hook("onAfterViewInit")}ngAfterViewChecked(){this.onAfterViewChecked(),this._hook("onAfterViewChecked")}ngOnDestroy(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this.onDestroy(),this._hook("onDestroy")}_mergeProps(e,...i){return qn(e)?e(...i):Sn(...i)}_getHostInstance(e){return e?this.$hostName?this.$name===this.$hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0}_getPropValue(e){return this[e]||this._getHostInstance(this)?.[e]}_getOptionValue(e,i="",o={}){return Kn(e,i,o)}_hook(e,...i){if(!this.$hostName){let o=this._usePT(this._getPT(this.$pt(),this.$name),this._getOptionValue,`hooks.${e}`),r=this._useDefaultPT(this._getOptionValue,`hooks.${e}`);o?.(...i),r?.(...i)}}_load(){Ie.isStyleNameLoaded("base")||(this.baseStyle.loadBaseCSS(this.$styleOptions),this._loadGlobalStyles(),Ie.setLoadedStyleName("base")),this._loadThemeStyles()}_loadStyles(){this._load(),this._themeChangeListener("_load",()=>this._load())}_loadGlobalStyles(){let e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);Ce(e)&&this.baseStyle.load(e,d({name:"global"},this.$styleOptions))}_loadCoreStyles(){!Ie.isStyleNameLoaded(this.$style?.name)&&this.$style?.name&&(this.baseComponentStyle.loadCSS(this.$styleOptions),this.$style.loadCSS(this.$styleOptions),Ie.setLoadedStyleName(this.$style.name))}_loadThemeStyles(){if(!(this.$unstyled()||this.config?.theme()==="none")){if(!De.isStyleNameLoaded("common")){let{primitive:e,semantic:i,global:o,style:r}=this.$style?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,d({name:"primitive-variables"},this.$styleOptions)),this.baseStyle.load(i?.css,d({name:"semantic-variables"},this.$styleOptions)),this.baseStyle.load(o?.css,d({name:"global-variables"},this.$styleOptions)),this.baseStyle.loadBaseStyle(d({name:"global-style"},this.$styleOptions),r),De.setLoadedStyleName("common")}if(!De.isStyleNameLoaded(this.$style?.name)&&this.$style?.name){let{css:e,style:i}=this.$style?.getComponentTheme?.()||{};this.$style?.load(e,d({name:`${this.$style?.name}-variables`},this.$styleOptions)),this.$style?.loadStyle(d({name:`${this.$style?.name}-style`},this.$styleOptions),i),De.setLoadedStyleName(this.$style?.name)}if(!De.isStyleNameLoaded("layer-order")){let e=this.$style?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,d({name:"layer-order",first:!0},this.$styleOptions)),De.setLoadedStyleName("layer-order")}}}_loadScopedThemeStyles(e){let{css:i}=this.$style?.getPresetTheme?.(e,`[${this.$attrSelector}]`)||{},o=this.$style?.load(i,d({name:`${this.$attrSelector}-${this.$style?.name}`},this.$styleOptions));this.scopedStyleEl=o?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e,i=()=>{}){this._offThemeChangeListener(e),Ie.clearLoadedStyleNames();let o=i.bind(this);this.themeChangeListenerMap.set(e,o),Gt.on("theme:change",o)}_removeThemeListeners(){this._offThemeChangeListener("_themeScopedListener"),this._offThemeChangeListener("_loadCoreStyles"),this._offThemeChangeListener("_load")}_offThemeChangeListener(e){this.themeChangeListenerMap.has(e)&&(Gt.off("theme:change",this.themeChangeListenerMap.get(e)),this.themeChangeListenerMap.delete(e))}_getPTValue(e={},i="",o={},r=!0){let s=/./g.test(i)&&!!o[i.split(".")[0]],{mergeSections:a=!0,mergeProps:l=!1}=this._getPropValue("ptOptions")?.()||this.config?.ptOptions?.()||{},h=r?s?this._useGlobalPT(this._getPTClassValue,i,o):this._useDefaultPT(this._getPTClassValue,i,o):void 0,p=s?void 0:this._usePT(this._getPT(e,this.$hostName||this.$name),this._getPTClassValue,i,x(d({},o),{global:h||{}})),y=this._getPTDatasets(i);return a||!a&&p?l?this._mergeProps(l,h,p,y):d(d(d({},h),p),y):d(d({},p),y)}_getPTDatasets(e=""){let i="data-pc-",o=e==="root"&&Ce(this.$pt()?.["data-pc-section"]);return e!=="transition"&&x(d({},e==="root"&&x(d({[`${i}name`]:Me(o?this.$pt()?.["data-pc-section"]:this.$name)},o&&{[`${i}extend`]:Me(this.$name)}),{[`${this.$attrSelector}`]:""})),{[`${i}section`]:Me(e.includes(".")?e.split(".").at(-1)??"":e)})}_getPTClassValue(e,i,o){let r=this._getOptionValue(e,i,o);return rt(r)||Qn(r)?{class:r}:r}_getPT(e,i="",o){let r=(s,a=!1)=>{let l=o?o(s):s,h=Me(i),p=Me(this.$hostName||this.$name);return(a?h!==p?l?.[h]:void 0:l?.[h])??l};return e?.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:r(e.originalValue),value:r(e.value)}:r(e,!0)}_usePT(e,i,o,r){let s=a=>i?.call(this,a,o,r);if(e?.hasOwnProperty("_usept")){let{mergeSections:a=!0,mergeProps:l=!1}=e._usept||this.config?.ptOptions()||{},h=s(e.originalValue),p=s(e.value);return h===void 0&&p===void 0?void 0:rt(p)?p:rt(h)?h:a||!a&&p?l?this._mergeProps(l,h,p):d(d({},h),p):p}return s(e)}_useGlobalPT(e,i,o){return this._usePT(this.$globalPT,e,i,o)}_useDefaultPT(e,i,o){return this._usePT(this.$defaultPT,e,i,o)}ptm(e="",i={}){return this._getPTValue(this.$pt(),e,d(d({},this.$params),i))}ptms(e,i={}){return e.reduce((o,r)=>(o=Sn(o,this.ptm(r,i))||{},o),{})}ptmo(e={},i="",o={}){return this._getPTValue(e,i,d({instance:this},o),!1)}cx(e,i={}){return this.$unstyled()?void 0:ge(this._getOptionValue(this.$style.classes,e,d(d({},this.$params),i)))}sx(e="",i=!0,o={}){if(i){let r=this._getOptionValue(this.$style.inlineStyles,e,d(d({},this.$params),o)),s=this._getOptionValue(this.baseComponentStyle.inlineStyles,e,d(d({},this.$params),o));return d(d({},s),r)}}static \u0275fac=function(i){return new(i||n)};static \u0275dir=S({type:n,inputs:{dt:[1,"dt"],unstyled:[1,"unstyled"],pt:[1,"pt"],ptOptions:[1,"ptOptions"]},features:[A([Bi,V]),At]})}return n})();var Ri=(()=>{class n{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,i){e&&i&&(e.classList?e.classList.add(i):e.className+=" "+i)}static addMultipleClasses(e,i){if(e&&i)if(e.classList){let o=i.trim().split(" ");for(let r=0;r<o.length;r++)e.classList.add(o[r])}else{let o=i.split(" ");for(let r=0;r<o.length;r++)e.className+=" "+o[r]}}static removeClass(e,i){e&&i&&(e.classList?e.classList.remove(i):e.className=e.className.replace(new RegExp("(^|\\b)"+i.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,i){e&&i&&[i].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(r=>this.removeClass(e,r)))}static hasClass(e,i){return e&&i?e.classList?e.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(i){return i!==e})}static find(e,i){return Array.from(e.querySelectorAll(i))}static findSingle(e,i){return this.isElement(e)?e.querySelector(i):null}static index(e){let i=e.parentNode.childNodes,o=0;for(var r=0;r<i.length;r++){if(i[r]==e)return o;i[r].nodeType==1&&o++}return-1}static indexWithinGroup(e,i){let o=e.parentNode?e.parentNode.childNodes:[],r=0;for(var s=0;s<o.length;s++){if(o[s]==e)return r;o[s].attributes&&o[s].attributes[i]&&o[s].nodeType==1&&r++}return-1}static appendOverlay(e,i,o="self"){o!=="self"&&e&&i&&this.appendChild(e,i)}static alignOverlay(e,i,o="self",r=!0){e&&i&&(r&&(e.style.minWidth=`${n.getOuterWidth(i)}px`),o==="self"?this.relativePosition(e,i):this.absolutePosition(e,i))}static relativePosition(e,i,o=!0){let r=me=>{if(me)return getComputedStyle(me).getPropertyValue("position")==="relative"?me:r(me.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=i.offsetHeight,l=i.getBoundingClientRect(),h=this.getWindowScrollTop(),p=this.getWindowScrollLeft(),y=this.getViewport(),P=r(e)?.getBoundingClientRect()||{top:-1*h,left:-1*p},K,ie,Qe="top";l.top+a+s.height>y.height?(K=l.top-P.top-s.height,Qe="bottom",l.top+K<0&&(K=-1*l.top)):(K=a+l.top-P.top,Qe="top");let In=l.left+s.width-y.width,go=l.left-P.left;if(s.width>y.width?ie=(l.left-P.left)*-1:In>0?ie=go-In:ie=l.left-P.left,e.style.top=K+"px",e.style.left=ie+"px",e.style.transformOrigin=Qe,o){let me=jn(/-anchor-gutter$/)?.value;e.style.marginTop=Qe==="bottom"?`calc(${me??"2px"} * -1)`:me??""}}static absolutePosition(e,i,o=!0){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=r.height,a=r.width,l=i.offsetHeight,h=i.offsetWidth,p=i.getBoundingClientRect(),y=this.getWindowScrollTop(),q=this.getWindowScrollLeft(),P=this.getViewport(),K,ie;p.top+l+s>P.height?(K=p.top+y-s,e.style.transformOrigin="bottom",K<0&&(K=y)):(K=l+p.top+y,e.style.transformOrigin="top"),p.left+a>P.width?ie=Math.max(0,p.left+q+h-a):ie=p.left+q,e.style.top=K+"px",e.style.left=ie+"px",o&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,i=[]){return e.parentNode===null?i:this.getParents(e.parentNode,i.concat([e.parentNode]))}static getScrollableParents(e){let i=[];if(e){let o=this.getParents(e),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of o){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let h=l.split(",");for(let p of h){let y=this.findSingle(a,p);y&&s(y)&&i.push(y)}}a.nodeType!==9&&s(a)&&i.push(a)}}return i}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let i=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",i}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let i=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",i}static getHiddenElementDimensions(e){let i={};return e.style.visibility="hidden",e.style.display="block",i.width=e.offsetWidth,i.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",i}static scrollInView(e,i){let o=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=o?parseFloat(o):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=e.getBoundingClientRect(),p=i.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,y=e.scrollTop,q=e.clientHeight,P=this.getOuterHeight(i);p<0?e.scrollTop=y+p:p+P>q&&(e.scrollTop=y+p-q+P)}static fadeIn(e,i){e.style.opacity=0;let o=+new Date,r=0,s=function(){r=+e.style.opacity.replace(",",".")+(new Date().getTime()-o)/i,e.style.opacity=r,o=+new Date,+r<1&&(window.requestAnimationFrame?window.requestAnimationFrame(s):setTimeout(s,16))};s()}static fadeOut(e,i){var o=1,r=50,s=i,a=r/s;let l=setInterval(()=>{o=o-a,o<=0&&(o=0,clearInterval(l)),e.style.opacity=o},r)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,i){var o=Element.prototype,r=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(e,i)}static getOuterWidth(e,i){let o=e.offsetWidth;if(i){let r=getComputedStyle(e);o+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return o}static getHorizontalPadding(e){let i=getComputedStyle(e);return parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)}static getHorizontalMargin(e){let i=getComputedStyle(e);return parseFloat(i.marginLeft)+parseFloat(i.marginRight)}static innerWidth(e){let i=e.offsetWidth,o=getComputedStyle(e);return i+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),i}static width(e){let i=e.offsetWidth,o=getComputedStyle(e);return i-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),i}static getInnerHeight(e){let i=e.offsetHeight,o=getComputedStyle(e);return i+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),i}static getOuterHeight(e,i){let o=e.offsetHeight;if(i){let r=getComputedStyle(e);o+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return o}static getHeight(e){let i=e.offsetHeight,o=getComputedStyle(e);return i-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),i}static getWidth(e){let i=e.offsetWidth,o=getComputedStyle(e);return i-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),i}static getViewport(){let e=window,i=document,o=i.documentElement,r=i.getElementsByTagName("body")[0],s=e.innerWidth||o.clientWidth||r.clientWidth,a=e.innerHeight||o.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(e){var i=e.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,i){let o=e.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(i,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,i=e.indexOf("MSIE ");if(i>0)return!0;var o=e.indexOf("Trident/");if(o>0){var r=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,i){if(this.isElement(i))i.appendChild(e);else if(i&&i.el&&i.el.nativeElement)i.el.nativeElement.appendChild(e);else throw"Cannot append "+i+" to "+e}static removeChild(e,i){if(this.isElement(i))i.removeChild(e);else if(i.el&&i.el.nativeElement)i.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+i}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode?.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let i=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(i.borderLeftWidth)-parseFloat(i.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let i=document.createElement("div");i.className="p-scrollbar-measure",document.body.appendChild(i);let o=i.offsetWidth-i.clientWidth;return document.body.removeChild(i),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let i=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=i,i}static invokeElementMethod(e,i,o){e[i].apply(e,o)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),i=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:i[1]||"",version:i[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,i){e&&document.activeElement!==e&&e.focus(i)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,i=""){let o=this.find(e,this.getFocusableSelectorString(i)),r=[];for(let s of o){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(e,i=""){let o=this.findSingle(e,this.getFocusableSelectorString(i));if(o){let r=getComputedStyle(o);if(this.isVisible(o)&&r.display!="none"&&r.visibility!="hidden")return o}return null}static getFirstFocusableElement(e,i=""){let o=this.getFocusableElements(e,i);return o.length>0?o[0]:null}static getLastFocusableElement(e,i){let o=this.getFocusableElements(e,i);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(e,i=!1){let o=n.getFocusableElements(e),r=0;if(o&&o.length>0){let s=o.indexOf(o[0].ownerDocument.activeElement);i?s==-1||s===0?r=o.length-1:r=s-1:s!=-1&&s!==o.length-1&&(r=s+1)}return o[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,i){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@parent":return i?.parentElement;case"@grandparent":return i?.parentElement?.parentElement;default:let o=typeof e;if(o==="string")return document.querySelector(e);if(o==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,i){if(e){let o=e.getAttribute(i);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,i={},...o){if(e){let r=document.createElement(e);return this.setAttributes(r,i),r.append(...o),r}}static setAttribute(e,i="",o){this.isElement(e)&&o!==null&&o!==void 0&&e.setAttribute(i,o)}static setAttributes(e,i={}){if(this.isElement(e)){let o=(r,s)=>{let a=e?.$attrs?.[r]?[e?.$attrs?.[r]]:[];return[s].flat().reduce((l,h)=>{if(h!=null){let p=typeof h;if(p==="string"||p==="number")l.push(h);else if(p==="object"){let y=Array.isArray(h)?o(r,h):Object.entries(h).map(([q,P])=>r==="style"&&(P||P===0)?`${q.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${P}`:P?q:void 0);l=y.length?l.concat(y.filter(q=>!!q)):l}}return l},a)};Object.entries(i).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?e.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(e,s):(s=r==="class"?[...new Set(o("class",s))].join(" ").trim():r==="style"?o("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=s),e.setAttribute(r,s))}})}}static isFocusableElement(e,i=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`):!1}}return n})();var Li=(()=>{class n extends B{autofocus=!1;focused=!1;platformId=c(Ye);document=c(Ze);host=c(re);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){ke(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=Ri.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=b(n)))(o||n)}})();static \u0275dir=S({type:n,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[C]})}return n})();var D=(()=>{class n{el;renderer;pBind=v(void 0);_attrs=E(void 0);attrs=u(()=>this._attrs()||this.pBind());styles=u(()=>this.attrs()?.style);classes=u(()=>ge(this.attrs()?.class));listeners=[];constructor(e,i){this.el=e,this.renderer=i,R(()=>{let a=this.attrs()||{},{style:o,class:r}=a,s=An(a,["style","class"]);for(let[l,h]of Object.entries(s))if(l.startsWith("on")&&typeof h=="function"){let p=l.slice(2).toLowerCase();if(!this.listeners.some(y=>y.eventName===p)){let y=this.renderer.listen(this.el.nativeElement,p,h);this.listeners.push({eventName:p,unlisten:y})}}else h==null?this.renderer.removeAttribute(this.el.nativeElement,l):(this.renderer.setAttribute(this.el.nativeElement,l,h.toString()),l in this.el.nativeElement&&(this.el.nativeElement[l]=h))})}ngOnDestroy(){this.clearListeners()}setAttrs(e){it(this._attrs(),e)||this._attrs.set(e)}clearListeners(){this.listeners.forEach(({unlisten:e})=>e()),this.listeners=[]}static \u0275fac=function(i){return new(i||n)(se(re),se(Ee))};static \u0275dir=S({type:n,selectors:[["","pBind",""]],hostVars:4,hostBindings:function(i,o){i&2&&(et(o.styles()),_(o.classes()))},inputs:{pBind:[1,"pBind"]}})}return n})(),Et=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=j({type:n});static \u0275inj=L({})}return n})();var $i=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var fr=`
    ${$i}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,gr={root:({instance:n})=>{let t=typeof n.value=="function"?n.value():n.value,e=typeof n.size=="function"?n.size():n.size,i=typeof n.badgeSize=="function"?n.badgeSize():n.badgeSize,o=typeof n.severity=="function"?n.severity():n.severity;return["p-badge p-component",{"p-badge-circle":Ce(t)&&String(t).length===1,"p-badge-dot":Wn(t),"p-badge-sm":e==="small"||i==="small","p-badge-lg":e==="large"||i==="large","p-badge-xl":e==="xlarge"||i==="xlarge","p-badge-info":o==="info","p-badge-success":o==="success","p-badge-warn":o==="warn","p-badge-danger":o==="danger","p-badge-secondary":o==="secondary","p-badge-contrast":o==="contrast"}]}},ji=(()=>{class n extends V{name="badge";style=fr;classes=gr;static \u0275fac=(()=>{let e;return function(o){return(e||(e=b(n)))(o||n)}})();static \u0275prov=F({token:n,factory:n.\u0275fac})}return n})();var Hi=new k("BADGE_INSTANCE");var Mn=(()=>{class n extends B{componentName="Badge";$pcBadge=c(Hi,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(D,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=v();badgeSize=v();size=v();severity=v();value=v();badgeDisabled=v(!1,{transform:N});_componentStyle=c(ji);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=b(n)))(o||n)}})();static \u0275cmp=$({type:n,selectors:[["p-badge"]],hostVars:5,hostBindings:function(i,o){i&2&&(G("data-p",o.dataP),_(o.cn(o.cx("root"),o.styleClass())),Bn("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[A([ji,{provide:Hi,useExisting:n},{provide:Z,useExisting:n}]),Y([D]),C],decls:1,vars:1,template:function(i,o){i&1&&W(0),i&2&&ee(o.value())},dependencies:[ue,ce,Et],encapsulation:2,changeDetection:0})}return n})(),Ui=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=j({type:n});static \u0275inj=L({imports:[Mn,ce,ce]})}return n})();var br=["*"],yr={root:"p-fluid"},zi=(()=>{class n extends V{name="fluid";classes=yr;static \u0275fac=(()=>{let e;return function(o){return(e||(e=b(n)))(o||n)}})();static \u0275prov=F({token:n,factory:n.\u0275fac})}return n})();var Gi=new k("FLUID_INSTANCE"),St=(()=>{class n extends B{componentName="Fluid";$pcFluid=c(Gi,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(D,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=c(zi);static \u0275fac=(()=>{let e;return function(o){return(e||(e=b(n)))(o||n)}})();static \u0275cmp=$({type:n,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(i,o){i&2&&_(o.cx("root"))},features:[A([zi,{provide:Gi,useExisting:n},{provide:Z,useExisting:n}]),Y([D]),C],ngContentSelectors:br,decls:1,vars:0,template:function(i,o){i&1&&(le(),J(0))},dependencies:[ue],encapsulation:2,changeDetection:0})}return n})();var vr=["*"],_r=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Wi=(()=>{class n extends V{name="baseicon";css=_r;static \u0275fac=(()=>{let e;return function(o){return(e||(e=b(n)))(o||n)}})();static \u0275prov=F({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var qi=(()=>{class n extends B{spin=!1;_componentStyle=c(Wi);getClassNames(){return ge("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=b(n)))(o||n)}})();static \u0275cmp=$({type:n,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(i,o){i&2&&_(o.getClassNames())},inputs:{spin:[2,"spin","spin",N]},features:[A([Wi]),C],ngContentSelectors:vr,decls:1,vars:0,template:function(i,o){i&1&&(le(),J(0))},encapsulation:2,changeDetection:0})}return n})();var Cr=["data-p-icon","spinner"],Ki=(()=>{class n extends qi{pathId;onInit(){this.pathId="url(#"+qe()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=b(n)))(o||n)}})();static \u0275cmp=$({type:n,selectors:[["","data-p-icon","spinner"]],features:[C],attrs:Cr,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,o){i&1&&(Xe(),Pt(0,"g"),Bt(1,"path",0),Ot(),Pt(2,"defs")(3,"clipPath",1),Bt(4,"rect",2),Ot()()),i&2&&(G("clip-path",o.pathId),g(3),On("id",o.pathId))},encapsulation:2})}return n})();var Qi=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var Dr=`
    ${Qi}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,wr={root:"p-ink"},Xi=(()=>{class n extends V{name="ripple";style=Dr;classes=wr;static \u0275fac=(()=>{let e;return function(o){return(e||(e=b(n)))(o||n)}})();static \u0275prov=F({token:n,factory:n.\u0275fac})}return n})();var Zi=(()=>{class n extends B{componentName="Ripple";zone=c(kn);_componentStyle=c(Xi);animationListener;mouseDownListener;timeout;constructor(){super(),R(()=>{ke(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(e){let i=this.getInk();if(!i||this.document.defaultView?.getComputedStyle(i,null).display==="none")return;if(!this.$unstyled()&&Se(i,"p-ink-active"),i.setAttribute("data-p-ink-active","false"),!Ut(i)&&!zt(i)){let a=Math.max(Hn(this.el.nativeElement),zn(this.el.nativeElement));i.style.height=a+"px",i.style.width=a+"px"}let o=Un(this.el.nativeElement),r=e.pageX-o.left+this.document.body.scrollTop-zt(i)/2,s=e.pageY-o.top+this.document.body.scrollLeft-Ut(i)/2;this.renderer.setStyle(i,"top",s+"px"),this.renderer.setStyle(i,"left",r+"px"),!this.$unstyled()&&Ht(i,"p-ink-active"),i.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&(!this.$unstyled()&&Se(a,"p-ink-active"),a.setAttribute("data-p-ink-active","false"))},401)}getInk(){let e=this.el.nativeElement.children;for(let i=0;i<e.length;i++)if(typeof e[i].className=="string"&&e[i].className.indexOf("p-ink")!==-1)return e[i];return null}resetInk(){let e=this.getInk();e&&(!this.$unstyled()&&Se(e,"p-ink-active"),e.setAttribute("data-p-ink-active","false"))}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&Se(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"data-p-ink","true"),this.renderer.setAttribute(e,"data-p-ink-active","false"),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Gn(e))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(i){return new(i||n)};static \u0275dir=S({type:n,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[A([Xi]),C]})}return n})();var Yi=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\xA0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var Sr=["content"],Mr=["loadingicon"],Ir=["icon"],Ar=["*"],to=(n,t)=>({class:n,pt:t});function Nr(n,t){n&1&&ae(0)}function xr(n,t){if(n&1&&ye(0,"span",7),n&2){let e=w(3);_(e.cn(e.cx("loadingIcon"),"pi-spin",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon))),f("pBind",e.ptm("loadingIcon")),G("aria-hidden",!0)}}function Tr(n,t){if(n&1&&(Xe(),ye(0,"svg",8)),n&2){let e=w(3);_(e.cn(e.cx("loadingIcon"),e.cx("spinnerIcon"))),f("pBind",e.ptm("loadingIcon"))("spin",!0),G("aria-hidden",!0)}}function Vr(n,t){if(n&1&&(ve(0),O(1,xr,1,4,"span",3)(2,Tr,1,5,"svg",6),_e()),n&2){let e=w(2);g(),f("ngIf",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon)),g(),f("ngIf",!(e.loadingIcon||e.buttonProps!=null&&e.buttonProps.loadingIcon))}}function Fr(n,t){}function kr(n,t){if(n&1&&O(0,Fr,0,0,"ng-template",9),n&2){let e=w(2);f("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Pr(n,t){if(n&1&&(ve(0),O(1,Vr,3,2,"ng-container",2)(2,kr,1,1,null,5),_e()),n&2){let e=w();g(),f("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),g(),f("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",Lt(3,to,e.cx("loadingIcon"),e.ptm("loadingIcon")))}}function Or(n,t){if(n&1&&ye(0,"span",7),n&2){let e=w(2);_(e.cn(e.cx("icon"),e.icon||(e.buttonProps==null?null:e.buttonProps.icon))),f("pBind",e.ptm("icon")),G("data-p",e.dataIconP)}}function Br(n,t){}function Rr(n,t){if(n&1&&O(0,Br,0,0,"ng-template",9),n&2){let e=w(2);f("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function Lr(n,t){if(n&1&&(ve(0),O(1,Or,1,4,"span",3)(2,Rr,1,1,null,5),_e()),n&2){let e=w();g(),f("ngIf",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!e.iconTemplate&&!e._iconTemplate),g(),f("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",Lt(3,to,e.cx("icon"),e.ptm("icon")))}}function $r(n,t){if(n&1&&(T(0,"span",7),W(1),M()),n&2){let e=w();_(e.cx("label")),f("pBind",e.ptm("label")),G("aria-hidden",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!(e.label||e.buttonProps!=null&&e.buttonProps.label))("data-p",e.dataLabelP),g(),ee(e.label||(e.buttonProps==null?null:e.buttonProps.label))}}function jr(n,t){if(n&1&&ye(0,"p-badge",10),n&2){let e=w();f("value",e.badge||(e.buttonProps==null?null:e.buttonProps.badge))("severity",e.badgeSeverity||(e.buttonProps==null?null:e.buttonProps.badgeSeverity))("pt",e.ptm("pcBadge"))("unstyled",e.unstyled())}}var Hr={root:({instance:n})=>["p-button p-component",{"p-button-icon-only":n.hasIcon&&!n.label&&!n.buttonProps?.label&&!n.badge,"p-button-vertical":(n.iconPos==="top"||n.iconPos==="bottom")&&n.label,"p-button-loading":n.loading||n.buttonProps?.loading,"p-button-link":n.link||n.buttonProps?.link,[`p-button-${n.severity||n.buttonProps?.severity}`]:n.severity||n.buttonProps?.severity,"p-button-raised":n.raised||n.buttonProps?.raised,"p-button-rounded":n.rounded||n.buttonProps?.rounded,"p-button-text":n.text||n.variant==="text"||n.buttonProps?.text||n.buttonProps?.variant==="text","p-button-outlined":n.outlined||n.variant==="outlined"||n.buttonProps?.outlined||n.buttonProps?.variant==="outlined","p-button-sm":n.size==="small"||n.buttonProps?.size==="small","p-button-lg":n.size==="large"||n.buttonProps?.size==="large","p-button-plain":n.plain||n.buttonProps?.plain,"p-button-fluid":n.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:n})=>["p-button-icon",{[`p-button-icon-${n.iconPos||n.buttonProps?.iconPos}`]:n.label||n.buttonProps?.label,"p-button-icon-left":(n.iconPos==="left"||n.buttonProps?.iconPos==="left")&&n.label||n.buttonProps?.label,"p-button-icon-right":(n.iconPos==="right"||n.buttonProps?.iconPos==="right")&&n.label||n.buttonProps?.label,"p-button-icon-top":(n.iconPos==="top"||n.buttonProps?.iconPos==="top")&&n.label||n.buttonProps?.label,"p-button-icon-bottom":(n.iconPos==="bottom"||n.buttonProps?.iconPos==="bottom")&&n.label||n.buttonProps?.label},n.icon,n.buttonProps?.icon],spinnerIcon:({instance:n})=>Object.entries(n.cx("icon")).filter(([,t])=>!!t).reduce((t,[e])=>t+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},Ji=(()=>{class n extends V{name="button";style=Yi;classes=Hr;static \u0275fac=(()=>{let e;return function(o){return(e||(e=b(n)))(o||n)}})();static \u0275prov=F({token:n,factory:n.\u0275fac})}return n})();var eo=new k("BUTTON_INSTANCE");var no=(()=>{class n extends B{componentName="Button";hostName="";$pcButton=c(eo,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(D,{self:!0});_componentStyle=c(Ji);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=v(void 0,{transform:N});onClick=new oe;onFocus=new oe;onBlur=new oe;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=c(St,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant==="outlined",text:this.text||this.variant==="text",link:this.link,vertical:(this.iconPos==="top"||this.iconPos==="bottom")&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=b(n)))(o||n)}})();static \u0275cmp=$({type:n,selectors:[["p-button"]],contentQueries:function(i,o,r){if(i&1&&Je(r,Sr,5)(r,Mr,5)(r,Ir,5)(r,st,4),i&2){let s;H(s=U())&&(o.contentTemplate=s.first),H(s=U())&&(o.loadingIconTemplate=s.first),H(s=U())&&(o.iconTemplate=s.first),H(s=U())&&(o.templates=s)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",N],raised:[2,"raised","raised",N],rounded:[2,"rounded","rounded",N],text:[2,"text","text",N],plain:[2,"plain","plain",N],outlined:[2,"outlined","outlined",N],link:[2,"link","link",N],tabindex:[2,"tabindex","tabindex",Rn],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",N],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",N],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[A([Ji,{provide:eo,useExisting:n},{provide:Z,useExisting:n}]),Y([D]),C],ngContentSelectors:Ar,decls:7,vars:17,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt","unstyled",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt","unstyled"]],template:function(i,o){i&1&&(le(),T(0,"button",0),Q("click",function(s){return o.onClick.emit(s)})("focus",function(s){return o.onFocus.emit(s)})("blur",function(s){return o.onBlur.emit(s)}),J(1),O(2,Nr,1,0,"ng-container",1)(3,Pr,3,6,"ng-container",2)(4,Lr,3,6,"ng-container",2)(5,$r,2,6,"span",3)(6,jr,1,4,"p-badge",4),M()),i&2&&(_(o.cn(o.cx("root"),o.styleClass,o.buttonProps==null?null:o.buttonProps.styleClass)),f("ngStyle",o.style||(o.buttonProps==null?null:o.buttonProps.style))("disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("pAutoFocus",o.autofocus||(o.buttonProps==null?null:o.buttonProps.autofocus))("pBind",o.ptm("root")),G("type",o.type||(o.buttonProps==null?null:o.buttonProps.type))("aria-label",o.ariaLabel||(o.buttonProps==null?null:o.buttonProps.ariaLabel))("tabindex",o.tabindex||(o.buttonProps==null?null:o.buttonProps.tabindex))("data-p",o.dataP)("data-p-disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("data-p-severity",o.severity||(o.buttonProps==null?null:o.buttonProps.severity)),g(2),f("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),g(),f("ngIf",o.loading||(o.buttonProps==null?null:o.buttonProps.loading)),g(),f("ngIf",!(o.loading||o.buttonProps!=null&&o.buttonProps.loading)),g(),f("ngIf",!o.contentTemplate&&!o._contentTemplate&&(o.label||(o.buttonProps==null?null:o.buttonProps.label))),g(),f("ngIf",!o.contentTemplate&&!o._contentTemplate&&(o.badge||(o.buttonProps==null?null:o.buttonProps.badge))))},dependencies:[ue,tt,nt,Ln,Zi,Li,Ki,Ui,Mn,ce,D],encapsulation:2,changeDetection:0})}return n})();var io=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var Ur=["header"],zr=["title"],Gr=["subtitle"],Wr=["content"],qr=["footer"],Kr=["*",[["p-header"]],[["p-footer"]]],Qr=["*","p-header","p-footer"];function Xr(n,t){n&1&&ae(0)}function Zr(n,t){if(n&1&&(T(0,"div",1),J(1,1),O(2,Xr,1,0,"ng-container",2),M()),n&2){let e=w();_(e.cx("header")),f("pBind",e.ptm("header")),g(2),f("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)}}function Yr(n,t){if(n&1&&(ve(0),W(1),_e()),n&2){let e=w(2);g(),ee(e.header)}}function Jr(n,t){n&1&&ae(0)}function es(n,t){if(n&1&&(T(0,"div",1),O(1,Yr,2,1,"ng-container",3)(2,Jr,1,0,"ng-container",2),M()),n&2){let e=w();_(e.cx("title")),f("pBind",e.ptm("title")),g(),f("ngIf",e.header&&!e._titleTemplate&&!e.titleTemplate),g(),f("ngTemplateOutlet",e.titleTemplate||e._titleTemplate)}}function ts(n,t){if(n&1&&(ve(0),W(1),_e()),n&2){let e=w(2);g(),ee(e.subheader)}}function ns(n,t){n&1&&ae(0)}function is(n,t){if(n&1&&(T(0,"div",1),O(1,ts,2,1,"ng-container",3)(2,ns,1,0,"ng-container",2),M()),n&2){let e=w();_(e.cx("subtitle")),f("pBind",e.ptm("subtitle")),g(),f("ngIf",e.subheader&&!e._subtitleTemplate&&!e.subtitleTemplate),g(),f("ngTemplateOutlet",e.subtitleTemplate||e._subtitleTemplate)}}function os(n,t){n&1&&ae(0)}function rs(n,t){n&1&&ae(0)}function ss(n,t){if(n&1&&(T(0,"div",1),J(1,2),O(2,rs,1,0,"ng-container",2),M()),n&2){let e=w();_(e.cx("footer")),f("pBind",e.ptm("footer")),g(2),f("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}var as=`
    ${io}

    .p-card {
        display: block;
    }
`,ls={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},oo=(()=>{class n extends V{name="card";style=as;classes=ls;static \u0275fac=(()=>{let e;return function(o){return(e||(e=b(n)))(o||n)}})();static \u0275prov=F({token:n,factory:n.\u0275fac})}return n})();var ro=new k("CARD_INSTANCE"),so=(()=>{class n extends B{componentName="Card";$pcCard=c(ro,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(D,{self:!0});_componentStyle=c(oo);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}header;subheader;set style(e){it(this._style(),e)||(this._style.set(e),this.el?.nativeElement&&e&&Object.keys(e).forEach(i=>{this.el.nativeElement.style[i]=e[i]}))}get style(){return this._style()}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=E(null);getBlockableElement(){return this.el.nativeElement}templates;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this._headerTemplate=e.template;break;case"title":this._titleTemplate=e.template;break;case"subtitle":this._subtitleTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=b(n)))(o||n)}})();static \u0275cmp=$({type:n,selectors:[["p-card"]],contentQueries:function(i,o,r){if(i&1&&Je(r,Xn,5)(r,Zn,5)(r,Ur,4)(r,zr,4)(r,Gr,4)(r,Wr,4)(r,qr,4)(r,st,4),i&2){let s;H(s=U())&&(o.headerFacet=s.first),H(s=U())&&(o.footerFacet=s.first),H(s=U())&&(o.headerTemplate=s.first),H(s=U())&&(o.titleTemplate=s.first),H(s=U())&&(o.subtitleTemplate=s.first),H(s=U())&&(o.contentTemplate=s.first),H(s=U())&&(o.footerTemplate=s.first),H(s=U())&&(o.templates=s)}},hostVars:4,hostBindings:function(i,o){i&2&&(et(o._style()),_(o.cn(o.cx("root"),o.styleClass)))},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[A([oo,{provide:ro,useExisting:n},{provide:Z,useExisting:n}]),Y([D]),C],ngContentSelectors:Qr,decls:8,vars:11,consts:[[3,"pBind","class",4,"ngIf"],[3,"pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"]],template:function(i,o){i&1&&(le(Kr),O(0,Zr,3,4,"div",0),T(1,"div",1),O(2,es,3,5,"div",0)(3,is,3,5,"div",0),T(4,"div",1),J(5),O(6,os,1,0,"ng-container",2),M(),O(7,ss,3,4,"div",0),M()),i&2&&(f("ngIf",o.headerFacet||o.headerTemplate||o._headerTemplate),g(),_(o.cx("body")),f("pBind",o.ptm("body")),g(),f("ngIf",o.header||o.titleTemplate||o._titleTemplate),g(),f("ngIf",o.subheader||o.subtitleTemplate||o._subtitleTemplate),g(),_(o.cx("content")),f("pBind",o.ptm("content")),g(2),f("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),g(),f("ngIf",o.footerFacet||o.footerTemplate||o._footerTemplate))},dependencies:[ue,tt,nt,ce,Et,D],encapsulation:2,changeDetection:0})}return n})();var ao=(()=>{class n extends B{modelValue=E(void 0);$filled=u(()=>Ce(this.modelValue()));writeModelValue(e){this.modelValue.set(e)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=b(n)))(o||n)}})();static \u0275dir=S({type:n,features:[C]})}return n})();var lo=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`;var ds=`
    ${lo}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,us={root:({instance:n})=>["p-inputtext p-component",{"p-filled":n.$filled(),"p-inputtext-sm":n.pSize==="small","p-inputtext-lg":n.pSize==="large","p-invalid":n.invalid(),"p-variant-filled":n.$variant()==="filled","p-inputtext-fluid":n.hasFluid}]},uo=(()=>{class n extends V{name="inputtext";style=ds;classes=us;static \u0275fac=(()=>{let e;return function(o){return(e||(e=b(n)))(o||n)}})();static \u0275prov=F({token:n,factory:n.\u0275fac})}return n})();var co=new k("INPUTTEXT_INSTANCE"),ho=(()=>{class n extends ao{componentName="InputText";hostName="";ptInputText=v();pInputTextPT=v();pInputTextUnstyled=v();bindDirectiveInstance=c(D,{self:!0});$pcInputText=c(co,{optional:!0,skipSelf:!0})??void 0;ngControl=c(ct,{optional:!0,self:!0});pcFluid=c(St,{optional:!0,host:!0,skipSelf:!0});pSize;variant=v();fluid=v(void 0,{transform:N});invalid=v(void 0,{transform:N});$variant=u(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=c(uo);constructor(){super(),R(()=>{let e=this.ptInputText()||this.pInputTextPT();e&&this.directivePT.set(e)}),R(()=>{this.pInputTextUnstyled()&&this.directiveUnstyled.set(this.pInputTextUnstyled())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}get dataP(){return this.cn({invalid:this.invalid(),fluid:this.hasFluid,filled:this.$variant()==="filled",[this.pSize]:this.pSize})}static \u0275fac=function(i){return new(i||n)};static \u0275dir=S({type:n,selectors:[["","pInputText",""]],hostVars:3,hostBindings:function(i,o){i&1&&Q("input",function(){return o.onInput()}),i&2&&(G("data-p",o.dataP),_(o.cx("root")))},inputs:{hostName:"hostName",ptInputText:[1,"ptInputText"],pInputTextPT:[1,"pInputTextPT"],pInputTextUnstyled:[1,"pInputTextUnstyled"],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},features:[A([uo,{provide:co,useExisting:n},{provide:Z,useExisting:n}]),Y([D]),C]})}return n})(),po=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=j({type:n});static \u0275inj=L({})}return n})();function hs(n,t){if(n&1&&(T(0,"p",9),W(1),M()),n&2){let e=t.$implicit;g(),ee(e.message)}}function ps(n,t){if(n&1&&Ft(0,hs,2,1,"p",9,Vt),n&2){let e=w();kt(e.form.name().errors())}}function fs(n,t){if(n&1&&(T(0,"p",9),W(1),M()),n&2){let e=t.$implicit;g(),ee(e.message)}}function gs(n,t){if(n&1&&Ft(0,fs,2,1,"p",9,Vt),n&2){let e=w();kt(e.form.email().errors())}}var fo=class n{router=c($n);userId=at("userId","",{type:"local"});username=at("username","",{type:"local"});email=at("email","",{type:"local"});constructor(){}form=Cn(de(()=>{let t=this.username(),e=this.email();return{name:t??"",email:e??""}}),t=>{En(t.name,{message:"Name is required"}),En(t.email,{message:"Email is required"}),Ti(t.email,{message:"Email is not valid"})},{submission:{action:async t=>{let e=t().value();try{let{id:i}=await Jn.post("/users/get-or-create",e).then(o=>o.data);return this.userId.set(i),this.username.set(e.name),this.email.set(e.email),this.router.navigateByUrl("/landing"),null}catch(i){return console.error("Error during login/signup:",i),{kind:"serverError",message:"An error occurred while processing your request. Please try again later."}}}}});static \u0275fac=function(e){return new(e||n)};static \u0275cmp=$({type:n,selectors:[["app-login"]],decls:15,vars:7,consts:[[1,"h-screen","w-screen","flex","items-center","justify-center"],["header","Login/Signup",1,"w-96"],[3,"formRoot"],["for","name",1,"block","mb-2"],["id","name","type","text","pInputText","","placeholder","Enter your name",1,"w-full","mb-4",3,"change","invalid","value"],["for","email",1,"block","mb-2"],["id","email","type","email","pInputText","","placeholder","Enter your email",1,"w-full","mb-4",3,"change","invalid","value"],[1,"flex","justify-end","items-center"],["type","submit","label","Login/Signup"],[1,"text-red-500","text-sm","mb-2"]],template:function(e,i){e&1&&(T(0,"div",0)(1,"p-card",1)(2,"form",2)(3,"div")(4,"label",3),W(5,"Name"),M(),T(6,"input",4),Q("change",function(r){return i.form.name().value.set(r.target.value)}),M(),xt(7,ps,2,0),M(),T(8,"div")(9,"label",5),W(10,"Email"),M(),T(11,"input",6),Q("change",function(r){return i.form.email().value.set(r.target.value)}),M(),xt(12,gs,2,0),M(),T(13,"div",7),ye(14,"p-button",8),M()()()()),e&2&&(g(2),f("formRoot",i.form),g(4),f("invalid",i.form.name().touched()&&i.form.name().invalid())("value",i.form.name().value()),g(),Tt(i.form.name().touched()?7:-1),g(4),f("invalid",i.form.email().touched()&&i.form.email().invalid())("value",i.form.email().value()),g(),Tt(i.form.email().touched()?12:-1))},dependencies:[so,Vi,po,ho,no,fi,pi,di,en],encapsulation:2})};export{fo as Login};
