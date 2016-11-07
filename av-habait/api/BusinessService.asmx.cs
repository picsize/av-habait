using av_habait.App_Code.BAL;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;

namespace av_habait.api
{
    /// <summary>
    /// Summary description for BusinessService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class BusinessService : System.Web.Services.WebService
    {
        private readonly Service _api = new Service();
        private readonly Business _business = new Business();

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string addMember(string member)
        {
            try
            {
                JObject json = JObject.Parse(member);
                Business business = new Business(json);
                _business.addBusiness(business);
                Dictionary<string, object> res = new Dictionary<string, object>();
                res.Add("state", 1);
                res.Add("business", business);
                return _api.convertToJson(res);

            }
            catch (Exception ex)
            {
                return _api.createExceptionJson(ex);
            }
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string getMemberBySlug(string slug)
        {
            try
            {
                Business business = _business.getMemberBySlug(slug);
                Dictionary<string, object> res = new Dictionary<string, object>();
                res.Add("state", 1);
                res.Add("business", business);
                return _api.convertToJson(res);

            }
            catch (Exception ex)
            {
                return _api.createExceptionJson(ex);
            }
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string getMembers(string slug) {
            try
            {
                List<Business> businessList = _business.getMembers(slug);
                Dictionary<string, object> res = new Dictionary<string, object>();
                res.Add("state", 1);
                res.Add("businessList", businessList);
                return _api.convertToJson(res);

            }
            catch (Exception ex)
            {
                return _api.createExceptionJson(ex);
            }
        }
    }

}
