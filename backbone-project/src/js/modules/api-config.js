/**
 * @description: api-config
 * @author: lixinwei
 * @version: V1
 * @update: 15/8/27
 */

define(function (require, exports, module) {

    window.DEBUG_TEST_DATA = 1;


    window.AppApi = {
        account: {
            logout: window.App.host + '/Account/UserOut'
        },
        login: {
            check: "/data/test.json",
            login: window.App.host + '/Account/LoginNew'
        },
        register: {
            register: window.App.host + "/Account/RegisterUser",
            checkPhone: window.App.host + "/Account/CheckPhoneIsRegistered",
            securityQuestions: window.App.host + "/Account/GetSecurityQuestion",
            sendCode: window.App.host + "/Account/SendPhoneCode",
            checkCode: window.App.host + "/Account/CheckCode"

            //register: "/data/register.json",
            //checkPhone: "/data/checkPhone.json",
            //securityQuestions: "/data/securityQuestions.json",
            //sendCode: "/data/sendCode.json"
        },
        resetPwd: {
            checkPhone: window.App.host + "/Account/CheckPhongIsTrue",
            sendCode: window.App.host + "/Account/SendPhoneCode",
            settingPwd: window.App.host + "/Account/SetNewPwd",
            questions: window.App.host + "/Account/ObtainSaveSecurityQuestion",
            checkAnswers: window.App.host + "/Account/CheckUserQuestion",
            checkPhoneCode: window.App.host + "/Account/CheckPhongCodeIsTrue"

            //checkPhone: "/data/resetPwdcheckPhone.json",
            //sendCode: "/data/sendCode.json",
            //settingPwd: "/data/sendCode.json",
            //questions: "/data/securityQuestions.json",
            //checkAnswers: "/data/checkAnswers.json",
            //checkPhoneCode: "/data/sendCode.json"
        },
        phoneBook: {
            list: window.App.host +'/LinkMan/GetLinkmanListByPassportIdPage',
            detail: window.App.host +'/LinkMan/GetLinkmanDetailById',
            remove: window.App.host + '/LinkMan/DeleteLinkmanById',
            add: window.App.host + '/LinkMan/AddLinkman',
            update: window.App.host + '/LinkMan/EditLinkman'
        },
        calllog: {
            list: window.App.host + '/LinkMan/IcloudCallRecord?pageEnable=Y',
            group: window.App.host + '/LinkMan/icloudCallGroup'
        },
        message: {
            list: window.App.host + '/list',
            //获取对话
            dialog: window.App.host + '/LinkMan/synMsgByPhone',
            group: window.App.host + '/LinkMan/iMessageGroup'
        },
        note: {
            list: window.App.host + '/LinkMan/icloudNote',
            add: window.App.host + '/add',
            remove: window.App.host + '/remove',
            detail: window.App.host + '/LinkMan/icloudNote'
        },
        album: {
            num: window.App.host + "/Files/getFilesCount",
            findFiles: window.App.host + "/Files/findFiles",
            dele: window.App.host + "/Files/batchDelFiles",
            download: window.App.host + "/Files/passport"

            //num: "/data/num.json",
            //findFiles: "/data/album.json",
            //findFilesm: "/data/album_m.json",
            //videoList: "/data/album.json"
        },
        record: {
            num: window.App.host + "/Files/getFilesCount",
            findFiles: window.App.host + "/Files/findFiles",
            dele: window.App.host + "/Files/batchDelFiles",
            download: window.App.host + "/Files/passport"
        },
        files: {
            fileSize: window.App.host + "/Files/getTotalFileSize"
        }



    };

    module.exports = window.AppApi;
});
