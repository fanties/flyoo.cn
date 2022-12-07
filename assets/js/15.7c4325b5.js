(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{375:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("p",[t._v("幂等性原本是数学上的概念，即使公式：f(x)=f(f(x)) 能够成立的数学性质。用在编程领域，则意为对同一个系统，使用同样的条件，一次请求和重复的多次请求对系统资源的影响是一致的。")]),t._v(" "),s("p",[t._v("幂等性是分布式系统设计中十分重要的概念，具有这一性质的接口在设计时总是秉持这样的一种理念：调用接口发生异常并且重复尝试时，总是会造成系统所无法承受的损失，所以必须阻止这种现象的发生。")]),t._v(" "),s("p",[t._v("幂等有两个维度：一是空间维度上的幂等，即幂等对象的范围，是个人还是机构，是某一次交易还是某种类型的交易...二是时间维度上的幂等，即幂等的保证时间，是几秒、几分钟还是永久性的...")]),t._v(" "),s("p",[t._v("不同的需求，会有不一样的解决方案，难度和成本也不一样。")]),t._v(" "),s("p",[t._v("HTTP/1.1中对幂等性的定义是:")]),t._v(" "),s("blockquote",[s("p",[t._v('Methods can also have the property of "idempotence" in that (aside from error or expiration issues) the side-effects of N > 0 identical requests is the same as for a single.          《rfc2616 - 9.1.2 Idempotent Methods》')])]),t._v(" "),s("p",[t._v("一次和多次请求某一个资源对于资源本身应该具有同样的结果（网络超时等问题除外）。也就是说，其任意多次执行对资源本身所产生的影响均与一次执行的影响相同。")]),t._v(" "),s("ol",[s("li",[t._v("幂等不仅仅只是一次（或多次）请求对资源没有副作用（比如查询数据库操作，没有增删改，因此没有对数据库有任何影响）。")]),t._v(" "),s("li",[t._v("幂等还包括第一次请求的时候对资源产生了副作用，但是以后的多次请求都不会再对资源产生副作用。")]),t._v(" "),s("li",[t._v("幂等关注的是以后的多次请求是否对资源产生的副作用，而不关注结果。")]),t._v(" "),s("li",[t._v("网络超时等问题，不是幂等的讨论范围。")])]),t._v(" "),s("p",[t._v("幂等性是系统服务对外一种承诺（而不是实现），承诺只要调用接口成功，外部多次调用对系统的影响是一致的。声明为幂等的服务会认为外部调用失败是常态，并且失败之后必然会有重试。")]),t._v(" "),s("h3",{attrs:{id:"不满足幂等性的情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不满足幂等性的情况"}},[t._v("#")]),t._v(" 不满足幂等性的情况")]),t._v(" "),s("p",[t._v("产生重复数据或数据不一致（假定程序业务代码没问题），绝大部分就是发生了重复的请求，重复请求是指同一个请求因为某些原因被多次提交。导致这个情况会有几种场景：")]),t._v(" "),s("ol",[s("li",[t._v("网络波动, 可能会引起重复请求")]),t._v(" "),s("li",[t._v("用户重复操作,用户在操作时候可能会无意触发多次下单交易,甚至没有响应而有意触发多次交易应用")]),t._v(" "),s("li",[t._v("使用了失效或超时重试机制(Nginx重试、RPC重试或业务层重试等)")]),t._v(" "),s("li",[t._v("页面重复刷新")]),t._v(" "),s("li",[t._v("使用浏览器后退按钮重复之前的操作,导致重复提交表单")]),t._v(" "),s("li",[t._v("使用浏览器历史记录重复提交表单")]),t._v(" "),s("li",[t._v("浏览器重复的HTTP请求")]),t._v(" "),s("li",[t._v("定时任务重复执行")]),t._v(" "),s("li",[t._v("用户双击提交按钮")]),t._v(" "),s("li",[t._v("MQ消息中间件，消息重复消费")]),t._v(" "),s("li",[t._v("第三方平台的接口（如：支付成功回调接口、微信公众号消息接口），因为异常也会导致多次异步回调")]),t._v(" "),s("li",[t._v("其他中间件/应用服务根据自身的特性，也有可能进行重试。")])]),t._v(" "),s("h3",{attrs:{id:"请求幂等性的解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求幂等性的解决方案"}},[t._v("#")]),t._v(" 请求幂等性的解决方案")]),t._v(" "),s("p",[t._v("为了保证幂等性，我们可以从两个方面入手")]),t._v(" "),s("ol",[s("li",[t._v("客户端防止重复请求")]),t._v(" "),s("li",[t._v("服务端进行校验")])]),t._v(" "),s("p",[t._v("客户端防止重复请求一般只是一种简单有效的优化方式，这并不能保证可靠性")]),t._v(" "),s("h4",{attrs:{id:"客户端处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#客户端处理"}},[t._v("#")]),t._v(" 客户端处理")]),t._v(" "),s("p",[t._v("客户端处理一般有：")]),t._v(" "),s("ol",[s("li",[t._v("函数节流")]),t._v(" "),s("li",[t._v("函数防抖")]),t._v(" "),s("li",[t._v("点击后按钮设置为不可点击")]),t._v(" "),s("li",[t._v("拦截多次点击，客户端直接响应")]),t._v(" "),s("li",[t._v("阻塞操作界面，比如Loading状态")])]),t._v(" "),s("h4",{attrs:{id:"token机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#token机制"}},[t._v("#")]),t._v(" token机制")]),t._v(" "),s("p",[t._v("为每一次操作都生成一个单独的唯一token（以下简称token）。一个token在操作的每一个阶段只有一次执行权，一旦执行成功则保存执行结果。对重复的请求，返回同一个结果。")]),t._v(" "),s("p",[t._v("在订单提交的场景，订单ID就可以作为一个token。每一个环节执行时都先检测一下该订单ID是否已经执行过这一步骤，对未执行的请求，执行操作并缓存结果，而对已经执行过的ID，则直接返回之前的执行结果，不做任何操作。")]),t._v(" "),s("p",[t._v("在写操作之前，还可以用这个token进行上锁，保证同一个token只进行一次写操作。")]),t._v(" "),s("p",[t._v("开源轮子可以参考：redis-auto-idempotent-spring-boot-starter")]),t._v(" "),s("h4",{attrs:{id:"全局唯一id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局唯一id"}},[t._v("#")]),t._v(" 全局唯一ID")]),t._v(" "),s("p",[t._v("和token原理一样，主要是实现细节稍微不同\n比如通过source来源 + 唯一序列号传入给后端，后端来判断请求是否重复,在并发时只能处理一个请求,其他相同并发请求要么返回请求重复,要么等待 前面请求执行完成后再执行。")]),t._v(" "),s("h4",{attrs:{id:"使用post-redirect-get-rpg-模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用post-redirect-get-rpg-模式"}},[t._v("#")]),t._v(" 使用Post/Redirect/Get(RPG)模式")]),t._v(" "),s("p",[t._v("在提交后执行页面重定向,这就是所谓的Post-Redirect—Get(PRG)模式,简单来说就是当用户提交连表单后,跳转到一个重定向的信息页面,这样就避免用户按F5刷新导致的重复提交,而且也不会出现浏览器表单重复提交的警告,也能消除按浏览器前进和后退导致同样重复提交的问题。")]),t._v(" "),s("h4",{attrs:{id:"在session存放特殊标志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在session存放特殊标志"}},[t._v("#")]),t._v(" 在session存放特殊标志")]),t._v(" "),s("p",[t._v("在服务端,生成一个唯一的标识符,将它存入session,同时前端获取这个标识符的值将它写入表单的隐藏中,用于用户输入信息后点击一起提交,在服务器端,获取表单中隐藏字段的值,与session中的唯一标识符比较,相等说明是首次提交,就处理本次请求,然后将session中的唯一标识符移除,不相等则表示是重复提交,不再做处理。")]),t._v(" "),s("h4",{attrs:{id:"乐观锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#乐观锁"}},[t._v("#")]),t._v(" 乐观锁")]),t._v(" "),s("p",[t._v("可以乐观锁的思想，利用版本号去做幂等，这个比较适用于更新操作。\n每条数据都有一个版本号，数据更新的时候，传入获取到的版本号，且版本号+1。在实际进行写操作的时候，会去比较请求参数里面的版本号，每个version只有一次执行成功的机会，一旦失败必须重新获取。")]),t._v(" "),s("div",{staticClass:"language-SQL line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" age "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" age "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" version "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" version "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#{id} and version = #{version};")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h4",{attrs:{id:"分布式锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁"}},[t._v("#")]),t._v(" 分布式锁")]),t._v(" "),s("p",[t._v("如果是分布是系统，构建全局唯一索引比较困难，例如唯一性的字段没法确定，这时候可以引入分布式锁，通过第三方的系统(redis或zookeeper)，在业务系统插入数据或者更新数据，获取分布式锁，然后做操作，之后释放锁，这样其实是把多线程并发的锁的思路，引入多多个系统，也就是分布式系统中得解决思路。")]),t._v(" "),s("p",[t._v("要点：某个长流程处理过程要求不能并发执行，可以在流程执行之前根据某个标志(用户ID+后缀等)获取分布式锁，其他流程执行时获取锁就会失败，也就是同一时间该流程只能有一个能执行成功，执行完成后，释放分布式锁(分布式锁要第三方系统提供)。")]),t._v(" "),s("h4",{attrs:{id:"状态机幂等"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#状态机幂等"}},[t._v("#")]),t._v(" 状态机幂等")]),t._v(" "),s("p",[t._v("在设计单据相关的业务，或者是任务相关的业务，肯定会涉及到状态机(状态变更图)，就是业务单据上面有个状态，状态在不同的情况下会发生变更，一般情况下存在有限状态机，这时候，如果状态机已经处于下一个状态，这时候来了一个上一个状态的变更，理论上是不能够变更的，这样的话，保证了有限状态机的幂等。注意：订单等单据类业务，存在很长的状态流转，一定要深刻理解状态机，对业务系统设计能力提高有很大帮助 。")]),t._v(" "),s("h4",{attrs:{id:"防重表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防重表"}},[t._v("#")]),t._v(" 防重表")]),t._v(" "),s("p",[t._v("以支付为例: 使用唯一主键去做防重表的唯一索引,比如使用订单号作为防重表的唯一索引,每一次请求都根据订单号向防重表中插入一条数据,插入成功说明可以处理后面的业务,当处理完业务逻辑之后删除防重表中的订单号数据,后续如果有重复请求,则会因为防重表唯一索引原因导致插入失败,直接返回操作失败,直到第一次请求返回结果,可以看出防重表作用就是加锁的功能。\n注: 最好结合状态机幂等先判断一下")]),t._v(" "),s("h4",{attrs:{id:"缓冲队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓冲队列"}},[t._v("#")]),t._v(" 缓冲队列")]),t._v(" "),s("p",[t._v("将请求都快速地接收下来后放入缓冲队列中,后续使用异步任务处理队列中的数据,过滤掉重复的请求,该解决方案优点是同步处理改成异步处理、高吞吐量,缺点则是不能及时地返回请求结果,需要后续轮询得处理结果。")]),t._v(" "),s("h3",{attrs:{id:"任务幂等性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#任务幂等性"}},[t._v("#")]),t._v(" 任务幂等性")]),t._v(" "),s("p",[t._v("任务幂等，指的是对于同一段数据，触发一次任务和多次任务是相同的结果。\n任务基本上都会涉及到写操作。如果同一段数据，被多次任务触发，进行了多次写操作，可能会造成脏数据。\n其实也很好解决，我们在抽象任务模型的时候，给「任务设计好不同的状态」就行了。比如任务初始化、启动后、成功、失败、取消等都有不同的状态。后续的任务触发请求，如果监测到这段数据的状态已经做了修改，就根据这个任务的状态和用户定义\n的策略，来决定是跳过还是重新执行。\n可以参考Spring Batch的设计，Spring Batch抽象了Job这个概念，提供了BatchStatus枚举来作为任务的状态：\npublic enum BatchStatus {STARTING, STARTED, STOPPING,    STOPPED, FAILED, COMPLETED, ABANDONED }复制代码\n相应的，比Job粒度更小的Step也有自己的状态。同时Spring Batch可以允许用户自定义地配置skip策略和失败处理策略。")]),t._v(" "),s("h3",{attrs:{id:"消息幂等性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#消息幂等性"}},[t._v("#")]),t._v(" 消息幂等性")]),t._v(" "),s("p",[t._v("消息幂等也是经常要考虑的问题。还是之前电商系统中订单提交的例子，比如库存扣减这种操作，为了保证吞吐量，可能会使用消息来实现。\n消息幂等的概念可以总结如下：")]),t._v(" "),s("blockquote",[s("p",[t._v("如果消息重试多次，消费者端对该重复消息消费多次与消费一次的结果是相同的，并且多次消费没有对系统产生副作用，那么我们就称这个过程是消息幂等的。")])]),t._v(" "),s("p",[t._v("对于消息来说，发送端可能产生重复消息，消费端也可能会重复消费同一条消息（大多数都是因为网络问题）。如果靠消息中间件去实现幂等，是一件比较困难的事情，增加幂等的处理会导致消息中间件的「吞吐量」下降。所以绝大多数消息「消息中间件本身不处理幂等问题」，而是交给了业务端自己去处理。\n而不论是发送端重复还是消费端重复，我们「只需要保证消费端幂等」就可以了，不需要在发送端做什么事情。而消费端做幂等，其实本质上也是上面提到的“「重复提交下的幂等」”，比较适合在消费端的入口处就做幂等处理。")]),t._v(" "),s("h3",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.jianshu.com/p/475589f5cd7b",target:"_blank",rel:"noopener noreferrer"}},[t._v("GameKing.幂等性浅谈.简书.2017.01.07"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/70748661",target:"_blank",rel:"noopener noreferrer"}},[t._v("Xxxx.幂等性.知乎.2019.06.25"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.cn/post/6897791146194386952",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yasin.幂等问题.掘金.2020.11.22"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.cn/post/6900188956525068301",target:"_blank",rel:"noopener noreferrer"}},[t._v("三分恶.什么是接口幂等性？为什么会产生接口幂等性问题？如何保证接口幂等性？.掘金.2020.11.28"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);