!function(e,t){"function"===typeof define&&define.amd?define(["protobufjs/minimal"],t):"function"===typeof require&&"object"===typeof module&&module&&module.exports&&(module.exports=t(require("protobufjs/minimal")))}(0,(function(e){"use strict";var t=e.Reader,r=e.Writer,o=e.util,n=e.roots.default||(e.roots.default={});return n.RPC=function(){function s(e){if(this.subscriptions=[],this.messages=[],e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}var a;return s.prototype.subscriptions=o.emptyArray,s.prototype.messages=o.emptyArray,s.prototype.control=null,Object.defineProperty(s.prototype,"_control",{get:o.oneOfGetter(a=["control"]),set:o.oneOfSetter(a)}),s.encode=function(e,t){if(t||(t=r.create()),null!=e.subscriptions&&e.subscriptions.length)for(var o=0;o<e.subscriptions.length;++o)n.RPC.SubOpts.encode(e.subscriptions[o],t.uint32(10).fork()).ldelim();if(null!=e.messages&&e.messages.length)for(o=0;o<e.messages.length;++o)n.RPC.Message.encode(e.messages[o],t.uint32(18).fork()).ldelim();return null!=e.control&&Object.hasOwnProperty.call(e,"control")&&n.RPC.ControlMessage.encode(e.control,t.uint32(26).fork()).ldelim(),t},s.decode=function(e,r){e instanceof t||(e=t.create(e));for(var o=void 0===r?e.len:e.pos+r,s=new n.RPC;e.pos<o;){var a=e.uint32();switch(a>>>3){case 1:s.subscriptions&&s.subscriptions.length||(s.subscriptions=[]),s.subscriptions.push(n.RPC.SubOpts.decode(e,e.uint32()));break;case 2:s.messages&&s.messages.length||(s.messages=[]),s.messages.push(n.RPC.Message.decode(e,e.uint32()));break;case 3:s.control=n.RPC.ControlMessage.decode(e,e.uint32());break;default:e.skipType(7&a)}}return s},s.fromObject=function(e){if(e instanceof n.RPC)return e;var t=new n.RPC;if(e.subscriptions){if(!Array.isArray(e.subscriptions))throw TypeError(".RPC.subscriptions: array expected");t.subscriptions=[];for(var r=0;r<e.subscriptions.length;++r){if("object"!==typeof e.subscriptions[r])throw TypeError(".RPC.subscriptions: object expected");t.subscriptions[r]=n.RPC.SubOpts.fromObject(e.subscriptions[r])}}if(e.messages){if(!Array.isArray(e.messages))throw TypeError(".RPC.messages: array expected");t.messages=[];for(r=0;r<e.messages.length;++r){if("object"!==typeof e.messages[r])throw TypeError(".RPC.messages: object expected");t.messages[r]=n.RPC.Message.fromObject(e.messages[r])}}if(null!=e.control){if("object"!==typeof e.control)throw TypeError(".RPC.control: object expected");t.control=n.RPC.ControlMessage.fromObject(e.control)}return t},s.toObject=function(e,t){t||(t={});var r={};if((t.arrays||t.defaults)&&(r.subscriptions=[],r.messages=[]),e.subscriptions&&e.subscriptions.length){r.subscriptions=[];for(var o=0;o<e.subscriptions.length;++o)r.subscriptions[o]=n.RPC.SubOpts.toObject(e.subscriptions[o],t)}if(e.messages&&e.messages.length){r.messages=[];for(o=0;o<e.messages.length;++o)r.messages[o]=n.RPC.Message.toObject(e.messages[o],t)}return null!=e.control&&e.hasOwnProperty("control")&&(r.control=n.RPC.ControlMessage.toObject(e.control,t),t.oneofs&&(r._control="control")),r},s.prototype.toJSON=function(){return this.constructor.toObject(this,e.util.toJSONOptions)},s.SubOpts=function(){function s(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}var a;return s.prototype.subscribe=null,s.prototype.topic=null,Object.defineProperty(s.prototype,"_subscribe",{get:o.oneOfGetter(a=["subscribe"]),set:o.oneOfSetter(a)}),Object.defineProperty(s.prototype,"_topic",{get:o.oneOfGetter(a=["topic"]),set:o.oneOfSetter(a)}),s.encode=function(e,t){return t||(t=r.create()),null!=e.subscribe&&Object.hasOwnProperty.call(e,"subscribe")&&t.uint32(8).bool(e.subscribe),null!=e.topic&&Object.hasOwnProperty.call(e,"topic")&&t.uint32(18).string(e.topic),t},s.decode=function(e,r){e instanceof t||(e=t.create(e));for(var o=void 0===r?e.len:e.pos+r,s=new n.RPC.SubOpts;e.pos<o;){var a=e.uint32();switch(a>>>3){case 1:s.subscribe=e.bool();break;case 2:s.topic=e.string();break;default:e.skipType(7&a)}}return s},s.fromObject=function(e){if(e instanceof n.RPC.SubOpts)return e;var t=new n.RPC.SubOpts;return null!=e.subscribe&&(t.subscribe=Boolean(e.subscribe)),null!=e.topic&&(t.topic=String(e.topic)),t},s.toObject=function(e,t){t||(t={});var r={};return null!=e.subscribe&&e.hasOwnProperty("subscribe")&&(r.subscribe=e.subscribe,t.oneofs&&(r._subscribe="subscribe")),null!=e.topic&&e.hasOwnProperty("topic")&&(r.topic=e.topic,t.oneofs&&(r._topic="topic")),r},s.prototype.toJSON=function(){return this.constructor.toObject(this,e.util.toJSONOptions)},s}(),s.Message=function(){function s(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}var a;return s.prototype.from=null,s.prototype.data=null,s.prototype.seqno=null,s.prototype.topic="",s.prototype.signature=null,s.prototype.key=null,Object.defineProperty(s.prototype,"_from",{get:o.oneOfGetter(a=["from"]),set:o.oneOfSetter(a)}),Object.defineProperty(s.prototype,"_data",{get:o.oneOfGetter(a=["data"]),set:o.oneOfSetter(a)}),Object.defineProperty(s.prototype,"_seqno",{get:o.oneOfGetter(a=["seqno"]),set:o.oneOfSetter(a)}),Object.defineProperty(s.prototype,"_signature",{get:o.oneOfGetter(a=["signature"]),set:o.oneOfSetter(a)}),Object.defineProperty(s.prototype,"_key",{get:o.oneOfGetter(a=["key"]),set:o.oneOfSetter(a)}),s.encode=function(e,t){return t||(t=r.create()),null!=e.from&&Object.hasOwnProperty.call(e,"from")&&t.uint32(10).bytes(e.from),null!=e.data&&Object.hasOwnProperty.call(e,"data")&&t.uint32(18).bytes(e.data),null!=e.seqno&&Object.hasOwnProperty.call(e,"seqno")&&t.uint32(26).bytes(e.seqno),t.uint32(34).string(e.topic),null!=e.signature&&Object.hasOwnProperty.call(e,"signature")&&t.uint32(42).bytes(e.signature),null!=e.key&&Object.hasOwnProperty.call(e,"key")&&t.uint32(50).bytes(e.key),t},s.decode=function(e,r){e instanceof t||(e=t.create(e));for(var s=void 0===r?e.len:e.pos+r,a=new n.RPC.Message;e.pos<s;){var i=e.uint32();switch(i>>>3){case 1:a.from=e.bytes();break;case 2:a.data=e.bytes();break;case 3:a.seqno=e.bytes();break;case 4:a.topic=e.string();break;case 5:a.signature=e.bytes();break;case 6:a.key=e.bytes();break;default:e.skipType(7&i)}}if(!a.hasOwnProperty("topic"))throw o.ProtocolError("missing required 'topic'",{instance:a});return a},s.fromObject=function(e){if(e instanceof n.RPC.Message)return e;var t=new n.RPC.Message;return null!=e.from&&("string"===typeof e.from?o.base64.decode(e.from,t.from=o.newBuffer(o.base64.length(e.from)),0):e.from.length&&(t.from=e.from)),null!=e.data&&("string"===typeof e.data?o.base64.decode(e.data,t.data=o.newBuffer(o.base64.length(e.data)),0):e.data.length&&(t.data=e.data)),null!=e.seqno&&("string"===typeof e.seqno?o.base64.decode(e.seqno,t.seqno=o.newBuffer(o.base64.length(e.seqno)),0):e.seqno.length&&(t.seqno=e.seqno)),null!=e.topic&&(t.topic=String(e.topic)),null!=e.signature&&("string"===typeof e.signature?o.base64.decode(e.signature,t.signature=o.newBuffer(o.base64.length(e.signature)),0):e.signature.length&&(t.signature=e.signature)),null!=e.key&&("string"===typeof e.key?o.base64.decode(e.key,t.key=o.newBuffer(o.base64.length(e.key)),0):e.key.length&&(t.key=e.key)),t},s.toObject=function(e,t){t||(t={});var r={};return t.defaults&&(r.topic=""),null!=e.from&&e.hasOwnProperty("from")&&(r.from=t.bytes===String?o.base64.encode(e.from,0,e.from.length):t.bytes===Array?Array.prototype.slice.call(e.from):e.from,t.oneofs&&(r._from="from")),null!=e.data&&e.hasOwnProperty("data")&&(r.data=t.bytes===String?o.base64.encode(e.data,0,e.data.length):t.bytes===Array?Array.prototype.slice.call(e.data):e.data,t.oneofs&&(r._data="data")),null!=e.seqno&&e.hasOwnProperty("seqno")&&(r.seqno=t.bytes===String?o.base64.encode(e.seqno,0,e.seqno.length):t.bytes===Array?Array.prototype.slice.call(e.seqno):e.seqno,t.oneofs&&(r._seqno="seqno")),null!=e.topic&&e.hasOwnProperty("topic")&&(r.topic=e.topic),null!=e.signature&&e.hasOwnProperty("signature")&&(r.signature=t.bytes===String?o.base64.encode(e.signature,0,e.signature.length):t.bytes===Array?Array.prototype.slice.call(e.signature):e.signature,t.oneofs&&(r._signature="signature")),null!=e.key&&e.hasOwnProperty("key")&&(r.key=t.bytes===String?o.base64.encode(e.key,0,e.key.length):t.bytes===Array?Array.prototype.slice.call(e.key):e.key,t.oneofs&&(r._key="key")),r},s.prototype.toJSON=function(){return this.constructor.toObject(this,e.util.toJSONOptions)},s}(),s.ControlMessage=function(){function s(e){if(this.ihave=[],this.iwant=[],this.graft=[],this.prune=[],e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return s.prototype.ihave=o.emptyArray,s.prototype.iwant=o.emptyArray,s.prototype.graft=o.emptyArray,s.prototype.prune=o.emptyArray,s.encode=function(e,t){if(t||(t=r.create()),null!=e.ihave&&e.ihave.length)for(var o=0;o<e.ihave.length;++o)n.RPC.ControlIHave.encode(e.ihave[o],t.uint32(10).fork()).ldelim();if(null!=e.iwant&&e.iwant.length)for(o=0;o<e.iwant.length;++o)n.RPC.ControlIWant.encode(e.iwant[o],t.uint32(18).fork()).ldelim();if(null!=e.graft&&e.graft.length)for(o=0;o<e.graft.length;++o)n.RPC.ControlGraft.encode(e.graft[o],t.uint32(26).fork()).ldelim();if(null!=e.prune&&e.prune.length)for(o=0;o<e.prune.length;++o)n.RPC.ControlPrune.encode(e.prune[o],t.uint32(34).fork()).ldelim();return t},s.decode=function(e,r){e instanceof t||(e=t.create(e));for(var o=void 0===r?e.len:e.pos+r,s=new n.RPC.ControlMessage;e.pos<o;){var a=e.uint32();switch(a>>>3){case 1:s.ihave&&s.ihave.length||(s.ihave=[]),s.ihave.push(n.RPC.ControlIHave.decode(e,e.uint32()));break;case 2:s.iwant&&s.iwant.length||(s.iwant=[]),s.iwant.push(n.RPC.ControlIWant.decode(e,e.uint32()));break;case 3:s.graft&&s.graft.length||(s.graft=[]),s.graft.push(n.RPC.ControlGraft.decode(e,e.uint32()));break;case 4:s.prune&&s.prune.length||(s.prune=[]),s.prune.push(n.RPC.ControlPrune.decode(e,e.uint32()));break;default:e.skipType(7&a)}}return s},s.fromObject=function(e){if(e instanceof n.RPC.ControlMessage)return e;var t=new n.RPC.ControlMessage;if(e.ihave){if(!Array.isArray(e.ihave))throw TypeError(".RPC.ControlMessage.ihave: array expected");t.ihave=[];for(var r=0;r<e.ihave.length;++r){if("object"!==typeof e.ihave[r])throw TypeError(".RPC.ControlMessage.ihave: object expected");t.ihave[r]=n.RPC.ControlIHave.fromObject(e.ihave[r])}}if(e.iwant){if(!Array.isArray(e.iwant))throw TypeError(".RPC.ControlMessage.iwant: array expected");t.iwant=[];for(r=0;r<e.iwant.length;++r){if("object"!==typeof e.iwant[r])throw TypeError(".RPC.ControlMessage.iwant: object expected");t.iwant[r]=n.RPC.ControlIWant.fromObject(e.iwant[r])}}if(e.graft){if(!Array.isArray(e.graft))throw TypeError(".RPC.ControlMessage.graft: array expected");t.graft=[];for(r=0;r<e.graft.length;++r){if("object"!==typeof e.graft[r])throw TypeError(".RPC.ControlMessage.graft: object expected");t.graft[r]=n.RPC.ControlGraft.fromObject(e.graft[r])}}if(e.prune){if(!Array.isArray(e.prune))throw TypeError(".RPC.ControlMessage.prune: array expected");t.prune=[];for(r=0;r<e.prune.length;++r){if("object"!==typeof e.prune[r])throw TypeError(".RPC.ControlMessage.prune: object expected");t.prune[r]=n.RPC.ControlPrune.fromObject(e.prune[r])}}return t},s.toObject=function(e,t){t||(t={});var r={};if((t.arrays||t.defaults)&&(r.ihave=[],r.iwant=[],r.graft=[],r.prune=[]),e.ihave&&e.ihave.length){r.ihave=[];for(var o=0;o<e.ihave.length;++o)r.ihave[o]=n.RPC.ControlIHave.toObject(e.ihave[o],t)}if(e.iwant&&e.iwant.length){r.iwant=[];for(o=0;o<e.iwant.length;++o)r.iwant[o]=n.RPC.ControlIWant.toObject(e.iwant[o],t)}if(e.graft&&e.graft.length){r.graft=[];for(o=0;o<e.graft.length;++o)r.graft[o]=n.RPC.ControlGraft.toObject(e.graft[o],t)}if(e.prune&&e.prune.length){r.prune=[];for(o=0;o<e.prune.length;++o)r.prune[o]=n.RPC.ControlPrune.toObject(e.prune[o],t)}return r},s.prototype.toJSON=function(){return this.constructor.toObject(this,e.util.toJSONOptions)},s}(),s.ControlIHave=function(){function s(e){if(this.messageIDs=[],e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}var a;return s.prototype.topicID=null,s.prototype.messageIDs=o.emptyArray,Object.defineProperty(s.prototype,"_topicID",{get:o.oneOfGetter(a=["topicID"]),set:o.oneOfSetter(a)}),s.encode=function(e,t){if(t||(t=r.create()),null!=e.topicID&&Object.hasOwnProperty.call(e,"topicID")&&t.uint32(10).string(e.topicID),null!=e.messageIDs&&e.messageIDs.length)for(var o=0;o<e.messageIDs.length;++o)t.uint32(18).bytes(e.messageIDs[o]);return t},s.decode=function(e,r){e instanceof t||(e=t.create(e));for(var o=void 0===r?e.len:e.pos+r,s=new n.RPC.ControlIHave;e.pos<o;){var a=e.uint32();switch(a>>>3){case 1:s.topicID=e.string();break;case 2:s.messageIDs&&s.messageIDs.length||(s.messageIDs=[]),s.messageIDs.push(e.bytes());break;default:e.skipType(7&a)}}return s},s.fromObject=function(e){if(e instanceof n.RPC.ControlIHave)return e;var t=new n.RPC.ControlIHave;if(null!=e.topicID&&(t.topicID=String(e.topicID)),e.messageIDs){if(!Array.isArray(e.messageIDs))throw TypeError(".RPC.ControlIHave.messageIDs: array expected");t.messageIDs=[];for(var r=0;r<e.messageIDs.length;++r)"string"===typeof e.messageIDs[r]?o.base64.decode(e.messageIDs[r],t.messageIDs[r]=o.newBuffer(o.base64.length(e.messageIDs[r])),0):e.messageIDs[r].length&&(t.messageIDs[r]=e.messageIDs[r])}return t},s.toObject=function(e,t){t||(t={});var r={};if((t.arrays||t.defaults)&&(r.messageIDs=[]),null!=e.topicID&&e.hasOwnProperty("topicID")&&(r.topicID=e.topicID,t.oneofs&&(r._topicID="topicID")),e.messageIDs&&e.messageIDs.length){r.messageIDs=[];for(var n=0;n<e.messageIDs.length;++n)r.messageIDs[n]=t.bytes===String?o.base64.encode(e.messageIDs[n],0,e.messageIDs[n].length):t.bytes===Array?Array.prototype.slice.call(e.messageIDs[n]):e.messageIDs[n]}return r},s.prototype.toJSON=function(){return this.constructor.toObject(this,e.util.toJSONOptions)},s}(),s.ControlIWant=function(){function s(e){if(this.messageIDs=[],e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}return s.prototype.messageIDs=o.emptyArray,s.encode=function(e,t){if(t||(t=r.create()),null!=e.messageIDs&&e.messageIDs.length)for(var o=0;o<e.messageIDs.length;++o)t.uint32(10).bytes(e.messageIDs[o]);return t},s.decode=function(e,r){e instanceof t||(e=t.create(e));for(var o=void 0===r?e.len:e.pos+r,s=new n.RPC.ControlIWant;e.pos<o;){var a=e.uint32();if(a>>>3===1)s.messageIDs&&s.messageIDs.length||(s.messageIDs=[]),s.messageIDs.push(e.bytes());else e.skipType(7&a)}return s},s.fromObject=function(e){if(e instanceof n.RPC.ControlIWant)return e;var t=new n.RPC.ControlIWant;if(e.messageIDs){if(!Array.isArray(e.messageIDs))throw TypeError(".RPC.ControlIWant.messageIDs: array expected");t.messageIDs=[];for(var r=0;r<e.messageIDs.length;++r)"string"===typeof e.messageIDs[r]?o.base64.decode(e.messageIDs[r],t.messageIDs[r]=o.newBuffer(o.base64.length(e.messageIDs[r])),0):e.messageIDs[r].length&&(t.messageIDs[r]=e.messageIDs[r])}return t},s.toObject=function(e,t){t||(t={});var r={};if((t.arrays||t.defaults)&&(r.messageIDs=[]),e.messageIDs&&e.messageIDs.length){r.messageIDs=[];for(var n=0;n<e.messageIDs.length;++n)r.messageIDs[n]=t.bytes===String?o.base64.encode(e.messageIDs[n],0,e.messageIDs[n].length):t.bytes===Array?Array.prototype.slice.call(e.messageIDs[n]):e.messageIDs[n]}return r},s.prototype.toJSON=function(){return this.constructor.toObject(this,e.util.toJSONOptions)},s}(),s.ControlGraft=function(){function s(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}var a;return s.prototype.topicID=null,Object.defineProperty(s.prototype,"_topicID",{get:o.oneOfGetter(a=["topicID"]),set:o.oneOfSetter(a)}),s.encode=function(e,t){return t||(t=r.create()),null!=e.topicID&&Object.hasOwnProperty.call(e,"topicID")&&t.uint32(10).string(e.topicID),t},s.decode=function(e,r){e instanceof t||(e=t.create(e));for(var o=void 0===r?e.len:e.pos+r,s=new n.RPC.ControlGraft;e.pos<o;){var a=e.uint32();if(a>>>3===1)s.topicID=e.string();else e.skipType(7&a)}return s},s.fromObject=function(e){if(e instanceof n.RPC.ControlGraft)return e;var t=new n.RPC.ControlGraft;return null!=e.topicID&&(t.topicID=String(e.topicID)),t},s.toObject=function(e,t){t||(t={});var r={};return null!=e.topicID&&e.hasOwnProperty("topicID")&&(r.topicID=e.topicID,t.oneofs&&(r._topicID="topicID")),r},s.prototype.toJSON=function(){return this.constructor.toObject(this,e.util.toJSONOptions)},s}(),s.ControlPrune=function(){function s(e){if(this.peers=[],e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}var a;return s.prototype.topicID=null,s.prototype.peers=o.emptyArray,s.prototype.backoff=null,Object.defineProperty(s.prototype,"_topicID",{get:o.oneOfGetter(a=["topicID"]),set:o.oneOfSetter(a)}),Object.defineProperty(s.prototype,"_backoff",{get:o.oneOfGetter(a=["backoff"]),set:o.oneOfSetter(a)}),s.encode=function(e,t){if(t||(t=r.create()),null!=e.topicID&&Object.hasOwnProperty.call(e,"topicID")&&t.uint32(10).string(e.topicID),null!=e.peers&&e.peers.length)for(var o=0;o<e.peers.length;++o)n.RPC.PeerInfo.encode(e.peers[o],t.uint32(18).fork()).ldelim();return null!=e.backoff&&Object.hasOwnProperty.call(e,"backoff")&&t.uint32(24).uint64(e.backoff),t},s.decode=function(e,r){e instanceof t||(e=t.create(e));for(var o=void 0===r?e.len:e.pos+r,s=new n.RPC.ControlPrune;e.pos<o;){var a=e.uint32();switch(a>>>3){case 1:s.topicID=e.string();break;case 2:s.peers&&s.peers.length||(s.peers=[]),s.peers.push(n.RPC.PeerInfo.decode(e,e.uint32()));break;case 3:s.backoff=e.uint64();break;default:e.skipType(7&a)}}return s},s.fromObject=function(e){if(e instanceof n.RPC.ControlPrune)return e;var t=new n.RPC.ControlPrune;if(null!=e.topicID&&(t.topicID=String(e.topicID)),e.peers){if(!Array.isArray(e.peers))throw TypeError(".RPC.ControlPrune.peers: array expected");t.peers=[];for(var r=0;r<e.peers.length;++r){if("object"!==typeof e.peers[r])throw TypeError(".RPC.ControlPrune.peers: object expected");t.peers[r]=n.RPC.PeerInfo.fromObject(e.peers[r])}}return null!=e.backoff&&(o.Long?(t.backoff=o.Long.fromValue(e.backoff)).unsigned=!0:"string"===typeof e.backoff?t.backoff=parseInt(e.backoff,10):"number"===typeof e.backoff?t.backoff=e.backoff:"object"===typeof e.backoff&&(t.backoff=new o.LongBits(e.backoff.low>>>0,e.backoff.high>>>0).toNumber(!0))),t},s.toObject=function(e,t){t||(t={});var r={};if((t.arrays||t.defaults)&&(r.peers=[]),null!=e.topicID&&e.hasOwnProperty("topicID")&&(r.topicID=e.topicID,t.oneofs&&(r._topicID="topicID")),e.peers&&e.peers.length){r.peers=[];for(var s=0;s<e.peers.length;++s)r.peers[s]=n.RPC.PeerInfo.toObject(e.peers[s],t)}return null!=e.backoff&&e.hasOwnProperty("backoff")&&("number"===typeof e.backoff?r.backoff=t.longs===String?String(e.backoff):e.backoff:r.backoff=t.longs===String?o.Long.prototype.toString.call(e.backoff):t.longs===Number?new o.LongBits(e.backoff.low>>>0,e.backoff.high>>>0).toNumber(!0):e.backoff,t.oneofs&&(r._backoff="backoff")),r},s.prototype.toJSON=function(){return this.constructor.toObject(this,e.util.toJSONOptions)},s}(),s.PeerInfo=function(){function s(e){if(e)for(var t=Object.keys(e),r=0;r<t.length;++r)null!=e[t[r]]&&(this[t[r]]=e[t[r]])}var a;return s.prototype.peerID=null,s.prototype.signedPeerRecord=null,Object.defineProperty(s.prototype,"_peerID",{get:o.oneOfGetter(a=["peerID"]),set:o.oneOfSetter(a)}),Object.defineProperty(s.prototype,"_signedPeerRecord",{get:o.oneOfGetter(a=["signedPeerRecord"]),set:o.oneOfSetter(a)}),s.encode=function(e,t){return t||(t=r.create()),null!=e.peerID&&Object.hasOwnProperty.call(e,"peerID")&&t.uint32(10).bytes(e.peerID),null!=e.signedPeerRecord&&Object.hasOwnProperty.call(e,"signedPeerRecord")&&t.uint32(18).bytes(e.signedPeerRecord),t},s.decode=function(e,r){e instanceof t||(e=t.create(e));for(var o=void 0===r?e.len:e.pos+r,s=new n.RPC.PeerInfo;e.pos<o;){var a=e.uint32();switch(a>>>3){case 1:s.peerID=e.bytes();break;case 2:s.signedPeerRecord=e.bytes();break;default:e.skipType(7&a)}}return s},s.fromObject=function(e){if(e instanceof n.RPC.PeerInfo)return e;var t=new n.RPC.PeerInfo;return null!=e.peerID&&("string"===typeof e.peerID?o.base64.decode(e.peerID,t.peerID=o.newBuffer(o.base64.length(e.peerID)),0):e.peerID.length&&(t.peerID=e.peerID)),null!=e.signedPeerRecord&&("string"===typeof e.signedPeerRecord?o.base64.decode(e.signedPeerRecord,t.signedPeerRecord=o.newBuffer(o.base64.length(e.signedPeerRecord)),0):e.signedPeerRecord.length&&(t.signedPeerRecord=e.signedPeerRecord)),t},s.toObject=function(e,t){t||(t={});var r={};return null!=e.peerID&&e.hasOwnProperty("peerID")&&(r.peerID=t.bytes===String?o.base64.encode(e.peerID,0,e.peerID.length):t.bytes===Array?Array.prototype.slice.call(e.peerID):e.peerID,t.oneofs&&(r._peerID="peerID")),null!=e.signedPeerRecord&&e.hasOwnProperty("signedPeerRecord")&&(r.signedPeerRecord=t.bytes===String?o.base64.encode(e.signedPeerRecord,0,e.signedPeerRecord.length):t.bytes===Array?Array.prototype.slice.call(e.signedPeerRecord):e.signedPeerRecord,t.oneofs&&(r._signedPeerRecord="signedPeerRecord")),r},s.prototype.toJSON=function(){return this.constructor.toObject(this,e.util.toJSONOptions)},s}(),s}(),n}));