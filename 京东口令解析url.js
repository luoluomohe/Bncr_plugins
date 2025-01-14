/**
 * @author Aming
 * @description 🐒解析京东口令
 * @team 红灯区
 * @version v1.0.1
 * @name 京东口令解析url
 * @rule ^(jd|pz)jx([\s\S]+)$
 * @priority 100000
 * @admin true
 * @public false
 *
 * 说明：
 * 解析jd口令：jdjx ?
 * 格式化膨胀：pzjx ?
 * 自动遮掩邀请人的PIN，只保留前1后1
 *
 *
 * 自定义：
 * 膨胀解析 默认格式化成bbk的助力格式CXJ_PZ_INVITE_CODES
 * 自定义变量名格式：
 * set AmingScript PZexportName ?
 * 兔子：
 * set AmingScript PZexportName PZ_CODE
 *
 * 接口为诺兰公义接口,为了防止滥用,本插件超授可用
 *
 */

/** Code Encryption Block[419fd178b7a37c9eae7b7426c4a04203ffb59abcd2f0bffff50724deee82706e426517c6bfc2e757fa8640e50eb84c7d1668e8db4eef8acfbb25f9868cbda11888d21dc524ba58fbe8a49167778ad856130c59fd68dc8ed29b60595a61ee0232aa1dc0d8e230a811eb01b11db592162450c5f29bb3d4b3ea3dc86202701097e35bf63c4228f79539e2c357b7db854b191cb9a96c5ef68a4728e33738b5b341946eef12cdd8826d9e1a4c62398e86204b61053d1ab321e2377822e15d81e3cfe886799b5e0c99cc3eb5cfdec6a0ada4f99bbd060ca3a466897bae30e34406a90363cb31e8724ac184280c4522a0af2b1ba615f5af77baa1a5e46db5a0eafa1cd4c3eb8c5bf01c729a252bb3ff94613da4b0db5a7eb6d0d276c089b069045db0d0662082cc3ebbc10fe8815598dd50365d97f9649c000fec0e7c19868821d99317f8b0127a769deaf4e3af8a4e6a20477a1560d51b546cd06cf8804b01c33a16c505ae3982b1ecceaac0ab2497a9f2d0c55e5d258e1cac416b8afaa2001ff5b61a9f03ac76c83b0fee0d4792611369ab8c29f3f7a1dc26e68f36ec2bcf0eabe1854769433ba26ed6248e8398a3acd7b09b5b5620707b7e882e7c48024b523679e2a6a4d4abe9cfeea57a0fd85db8d12bd4129959abe0d74ff3a6eaddd6a818ddfc71cbc1ff0accc07fc273ba38c80f8ec5c39f1596412f001238d133873fbc425bb030afdfc9c2b215c4ffc9180721b1ba482a82d56419b808a75ce463add2affce4eee0ccf1d03995deba6788d95a95b6b007241a5ee90b7d79f609c885d9bd6ce0b9e790ad53fd0ca4bbfa90112c1b70cb42048ce5712c73ef11c4760f9328d24f0d4bd9ca67b264aa544ef97db8405c238bd6bcf8926667c695e19c36ded1d8f123b354b26e5710171af992411f94b961ba29abfc225a92c022f1dfaed20bb5c1535b96b24621faf4a3e61afcdde34c16c4f7cfae392e2abd471ea81082882af6e7a72b9697f40f4c376be338ad1391e1f081234904f9c8ce87df2712818d05a4fde5bdfc73611b2a34553fcf01da29705aca4c79eeb496ca17e6e7258f5c940ea8767db8f2210f740d20488122dc9d7952bdf717ec3f1c54ca79774c877bc95d0e197bcaaa633c77e392e1f4f1a3d6ecfd01000e7ad0531af9268633e00e4e13c927a7646e1991ca04ce29a8206d35fd97a173d8734e58793b1a84489170f4ddc1be73eba066239f96408203380725551d9baba62e98a4e663113e108d2a73c258b6bc86ee2a633133fe23acffd06f42ea5a38b34a3288f4b2706d6f99931d0f94f87aaee0d69951bd71723ee7987ddb0d06bf01556b04942651edbb6e179bdecef7508d357cad2a8247c179095002942e0573a91451f5389474bdf2e4c7b19f868299a771be9848522f6bdb2f68d4a2fbeb29a9a8d2fbeb16ed4f5e8d20476dff76757a4e5c064ed7dbc96e2168dc2b0f4afaedb72bf9aaa916d4ec651a00bed80c370fc92bbd62b9db63a836e06c91dcebcfdeb9a8598a563aae5161fec11233ca66fe3bfd44c553c773cda3597ee583ac1fc87d29d747543ef4d233679b5788ca52f1e9d61ac355bdb1f1e795b646fa1a2ef1b77fc95b2ad26df244592686e52ac6287730546ab6220c85f4e72acfcc62628a64e7cf381cdd2d8cc7ec7db68136e2e5435f8fc8c2b8a669951a4ca46c45f54f9be2e908ba5a61818c58159c429771648889be914b449e2fb9f343] */
