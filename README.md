ChatApp
=======
##手机hybrid app试练ing 
###nodejs express+ socket.io + angularjs + seajs + android or ios实时聊天
  测试：karma angular-scenario e2e
  构建：yeoman grunt和bower


user:
uploadImage regUser updateUser login logout contact listUser online

friends
addFriends removeFriends update list(online) info

sessionManage

oldchat

pool



###统一过一遍事件订阅，要有效率，只撸需求

关于wcloud长期运行响应慢的问题

###初步问题定位：
第一是事件订阅和发布严重被滥用；管道回收机制不完善，事件循环不合理
    尤其是涉及dom更新的和ajax请求的事件发布，严重影响性能
    订阅被滥用的消息的handler中再次发布消息，可导致消息指数级增长
    事件循环不合理，每次根据优先级排序事件handler

第二是在查的共享内存的问题


问题1：消息发送太灵活，没有拘束，管道底层做好约束，上层注意使用规范

问题2：

###初步处理方案：
1.管道业务梳理
    严重关注事件生命周期
        关注何时开始监听，何时停止监听，关注发送的事件的作用域
    梳理事件业务场景，根据使用场景，添加更多单元测试用例

2.事件管道
    整理事件作用域，事件纳入到生命周期管理
    合理采用jquery域事件循环
    建议暂时去掉优先级和排序行为，后期以数据结构优先队列实现优先级事件
    消息管道和事件管道可统一

3.管道使用规范
    写代码时，事件订阅集中到一处
    监听自己的业务逻辑改为方法调用

###管道重写初步实现：
以下内容已经重写消息管道并加入单元测试：
1.close.panel|once这种只可能发生一次的事件做成once的
2.active.panel在active生命周期内的事件，做成|recycle域内可回收事件，生命周期结束要调用管道回收
    找出具有可回收特征的这些事件，比如checkin、checkout、save等操作，定义成可回收事件
    close.panel|once
    active.panel|recycle
    active.panel|always
3.整理jquery域事件Api，并且可以不依赖dom，统一对外接口


讲清楚规范的设计意图和好处
写一些不好的栗子

1. 通用规范与原则

变量作用域
不使用全局变量，缩小变量作用范围，对象状态通过成员属性维护

this作用域传递

弱类型

闭包
   不要通过闭包共享类外的变量
   方法内共享用闭包，方法外共享用成员变量
   
不要使用for in用forInEach

高內聚低耦合（对照代码重点讲），高扇入低扇出

减少变化，封装不变的部分
   减少分支判断
   面向对象抽象

2. 特有规范

模块定义规范
   模块路径，hae.define

类定义规范
   一个类一个模块
   多继承和单继承

bean定义规范，配置规范

bean注入规范

视图bean渲染定义规范

mve
model即store，维护数据状态，绑定其他store的变化
view绑定用户操作和其他view消息，一般不要维护状态，状态以store为准
少调用其他view的api，监听其他视图的消息要精简

消息和事件使用规范
原则：尽量少绑定消息，多用代理
例如相似的事件绑定一个即可，通过发送的参数加以区别
注意：绑定事件对象的销毁，dom事件和消息绑定解除
不要拿到别人的引用发消息，而应该由别人注册消息，自己发布
讲一个例外。。。

面向业务的数据集store规范

共享内存
原则：一般不会有太多共享状态需要维护，尽量少用共享，我开发的功能未用到过. 共享相当于全局变量。推荐业务store的方式维护状态，相当于局部变量

单元测试规范

下一节，概要设计
类图
流程图
支持profile
插件
注入array[1]自动转为对象
aop实现
关闭所有页面时，检查是否有dom事件遗留


讲清楚规范的设计意图和好处
写一些不好的栗子

1. 通用规范与原则

变量作用域
不使用全局变量，缩小变量作用范围，对象状态通过成员属性维护

this作用域传递

弱类型

闭包
   不要通过闭包共享类外的变量
   方法内共享用闭包，方法外共享用成员变量
   
不要使用for in用forInEach

高內聚低耦合（对照代码重点讲），高扇入低扇出

减少变化，封装不变的部分
   减少分支判断
   面向对象抽象

2. 特有规范

模块定义规范
   模块路径，hae.define

类定义规范
   一个类一个模块
   多继承和单继承

bean定义规范，配置规范

bean注入规范

视图bean渲染定义规范

mve
model即store，维护数据状态，绑定其他store的变化
view绑定用户操作和其他view消息，一般不要维护状态，状态以store为准
少调用其他view的api，监听其他视图的消息要精简

消息和事件使用规范
原则：尽量少绑定消息，多用代理
例如相似的事件绑定一个即可，通过发送的参数加以区别
注意：绑定事件对象的销毁，dom事件和消息绑定解除
不要拿到别人的引用发消息，而应该由别人注册消息，自己发布
讲一个例外。。。

面向业务的数据集store规范

共享内存
原则：一般不会有太多共享状态需要维护，尽量少用共享，我开发的功能未用到过. 共享相当于全局变量。推荐业务store的方式维护状态，相当于局部变量

单元测试规范

下一节，概要设计
类图
流程图
支持profile
插件
注入array[1]自动转为对象
aop实现
关闭所有页面时，检查是否有dom事件遗留
搜索框UI
优化容器数据结构 优化树数据结构
切换失败
ide-tabs dom结构有问题
model一次绑定多个消息
事件代理api
双击新增头部，loading，加载完成，激活新的，发布active消息
files html
folders 遍历
每个递归调用folder并返回

切换项目怎么做
保留10个以内容器和bean，销毁dom，再切换回来又要重新render和绑定dom
新增容器，加载config
容器hash中有就调用再次调用render
超过10个容器就要销毁容器

切换profile怎么做
default debug testing designer preview
切换dom，重新render
设计debug视图

保存状态怎么做

checkout checkin

scloud树同步
post请求去掉datatype


Bean容器的设计：

一、Bean类模型：
1. 通过父类Base间接引用EventPipe(单例)，具有消息发布的接口供子类调用，有消息注册接口供其它Bean调用；
2. Bean有消息统一注册接口，view Bean有dom渲染接口和dom ready事件注册接口，供容器统一调用.
（附：Bean调用EventPipe接口：消息注册和发布时，通过类名和id发布分别调用EventPipe）

二、BeanFactory主流程：
1. 解析配置，加载类模块：根据配置解析的类名列表加载所有Bean类模块；
2. 加载完成后，新建bean对象：根据配置和类模块生成bean树，并为每个bean建立类名索引和ID索引；
3. 所有bean实例化完毕，为每个bean注册消息：容器依次调用每个bean的消息注册接口；
4. 最后，渲染所有view bean，分别调用view bean的dom ready事件注册接口：容器找出所有view bean，根据配置的层次关系由外向内渲染每个view bean
（附：主要api：bean注入接口）

三、Bean重要依赖EventPipe：
构建于RangeTree类对象上，该对象核心数据结构是一棵层级树，支持点对点消息注册和发布，支持消息向上冒泡和向下广播，支持消息代理注册





