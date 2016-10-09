using System;
using System.Collections.Generic;
using System.Web.Script.Serialization;
using System.Web.Script.Services;
using System.Web.Services;
using av_habait.App_Code.BAL;
using System.Web;

namespace av_habait.website.api
{
    /// <summary>
    /// Summary description for category
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class CategoryService : System.Web.Services.WebService
    {
        private readonly Service _api = new Service();
        private readonly User _user = new User();
        private readonly Business _business = new Business();
        private readonly Category _category = new Category();
        private readonly Order _order = new Order();
        private readonly Route _route = new Route();
        private readonly Page _page = new Page();
        private readonly SmtpHandler _emailer = new SmtpHandler();

        //[WebMethod]
        //[ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        //public string register(string email, string password, int userType, string fullName, string mobileNumber,
        //string homeNumber, string familyStatus, string gender, string address, string birthday, string image)
        //{
        //    try
        //    {
        //        int num = _user.register(email, password, userType, fullName, mobileNumber, homeNumber, char.Parse(familyStatus), char.Parse(gender), address, DateTime.Parse(birthday), image);
        //        Dictionary<string, object> res = new Dictionary<string, object>();
        //        res.Add("state", num);

        //        string msg = string.Format("ברכות! נרשמת בהצלחה לאב הבית. המהפיכה בשוק בעלי המקצוע התחילה. אל תישארו מאחור");

        //        res.Add("emailComfirmation", _emailer.sendEmail(email, "הרשמה לאתר אב הבית", msg));
        //        return _api.convertToJson(res);
        //    }
        //    catch (Exception ex)
        //    {
        //        return _api.createExceptionJson(ex);
        //    }
        //}

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string login(string email, string password)
        {
            try
            {
                User userInfo = _user.login(email, password);
                Dictionary<string, object> res = new Dictionary<string, object>();
                if (userInfo != null)
                {
                    res.Add("state", 1);
                    res.Add("user", userInfo);
                }
                else
                    res.Add("state", 0);
                return _api.convertToJson(res);
            }
            catch (Exception ex)
            {
                return _api.createExceptionJson(ex);
            }
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string newOrder(int userId, int businessId, string orderDate, string orderETA, string orderType,
            int orderPaymetType, double orderPrice, int categoryId, string address)
        {
            try
            {
                Order newOrder;
                if (orderType == "120")
                    newOrder = _order.createOrder120(userId, businessId, DateTime.Parse(orderDate), orderType, orderPaymetType, orderPrice, categoryId, address);
                else
                    newOrder = _order.createOrder(userId, businessId, DateTime.Parse(orderDate), DateTime.Parse(orderETA), orderType, orderPaymetType, orderPrice, categoryId, address);
                Dictionary<string, object> res = new Dictionary<string, object>();
                if (newOrder != null)
                {
                    res.Add("state", 1);
                    res.Add("order", newOrder);

                    string msg = string.Format("ברכות! ביצעת הזמנה חדשה באתר אב הבית.");

                    res.Add("emailComfirmation", _emailer.sendEmail("shay.avr1911@gmail.com", "ביצוע הזמנה חדשה באתר אב הבית", msg));
                }
                else
                    res.Add("state", 0);
                return _api.convertToJson(res);
            }
            catch (Exception ex)
            {
                return _api.createExceptionJson(ex);
            }
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string getCategories()
        {
            try
            {
                List<Category> categories = _category.getAll();
                List<Category> parents = categories.FindAll(s => s.ParentId == 0);
                List<Category> all = new List<Category>();

                foreach (Category category in parents)
                {
                    category.setSubCategories(categories.FindAll(s => s.ParentId == category.Id));
                    all.Add(category);
                }

                Dictionary<string, object> res = new Dictionary<string, object>();
                if (all != null)
                {
                    res.Add("state", 1);
                    res.Add("categories", all);
                }
                else
                    res.Add("state", 0);
                return _api.convertToJson(res);
            }
            catch (Exception ex)
            {
                return _api.createExceptionJson(ex);
            }
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string getQuickOrdersCategories()
        {
            try
            {
                List<Category> categories = _category.getQuickOrdersCategories();
                List<Category> parents = categories.FindAll(s => s.ParentId == 0);
                List<Category> all = new List<Category>();

                foreach (Category category in parents)
                {
                    category.setSubCategories(categories.FindAll(s => s.ParentId == category.Id));
                    all.Add(category);
                }

                Dictionary<string, object> res = new Dictionary<string, object>();
                if (all != null)
                {
                    res.Add("state", 1);
                    res.Add("categories", all);
                }
                else
                    res.Add("state", 0);
                return _api.convertToJson(res);
            }
            catch (Exception ex)
            {
                return _api.createExceptionJson(ex);
            }
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string getSubCategoryInfo(string slug)
        {
            try
            {
                List<Category> categories = _category.getSubCategoryInfo(slug);
                List<Category> parents = categories.FindAll(s => s.ParentId == 0);
                List<Category> all = new List<Category>();

                foreach (Category category in parents)
                {
                    category.setSubCategories(categories.FindAll(s => s.ParentId == category.Id));
                    all.Add(category);
                }

                Dictionary<string, object> res = new Dictionary<string, object>();
                if (categories != null)
                {
                    res.Add("state", 1);
                    res.Add("category", all);
                }
                else
                    res.Add("state", 0);
                return _api.convertToJson(res);
            }
            catch (Exception ex)
            {
                return _api.createExceptionJson(ex);
            }
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string sendMail(string subject, string msg, string to)
        {
            return _emailer.sendEmail(to, subject, msg);
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string getRoute()
        {
            Dictionary<string, object> res = new Dictionary<string, object>();
            try
            {
                List<Route> allRoutes = _route.getAllRoutes();
                if (allRoutes != null)
                {
                    res.Add("state", 1);
                    res.Add("routes", allRoutes);
                    System.IO.File.WriteAllText(HttpContext.Current.Server.MapPath("/") + "route.json", _api.convertToJson(res));
                }
                else res.Add("state", 0);

                return _api.convertToJson(res);
            }
            catch (Exception ex)
            {
                return _api.createExceptionJson(ex);
            }
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string getCategoryBySlug(string slug)
        {
            try
            {
                Category thisCategory = _category.getCategoryBySlug(slug);
                Dictionary<string, object> res = new Dictionary<string, object>();
                if (thisCategory != null)
                {
                    res.Add("state", 1);
                    res.Add("category", thisCategory);
                }
                else res.Add("state", 0);

                return _api.convertToJson(res);
            }
            catch (Exception ex)
            {
                return _api.createExceptionJson(ex);
            }
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string addBusiness(string email, string password, int userType, string fullName, string mobileNumber,
            string homeNumber, string familyStatus, string gender, string address, string birthday, string image,
            string businessName, string sundayStart, string sundayEnd, string mondayStart, string mondayEnd, string tuesdayStart, string tuesdayEnd,
            string wednesdayStart, string wednesdayEnd, string thursdayStart, string thursdayEnd, string fridayStart, string fridayEnd,
            string saturdayStart, string saturdayEnd)
        {
            try
            {
                int num = _business.addBusiness(email, password, userType, fullName, mobileNumber,
                          homeNumber, char.Parse(familyStatus), char.Parse(gender), address, DateTime.Parse(birthday), image,
                          businessName, DateTime.Parse(sundayStart), DateTime.Parse(sundayEnd), DateTime.Parse(mondayStart),
                          DateTime.Parse(mondayEnd), DateTime.Parse(tuesdayStart), DateTime.Parse(tuesdayEnd),
                          DateTime.Parse(wednesdayStart), DateTime.Parse(wednesdayEnd), DateTime.Parse(thursdayStart),
                          DateTime.Parse(thursdayEnd), DateTime.Parse(fridayStart), DateTime.Parse(fridayEnd),
                          DateTime.Parse(saturdayStart), DateTime.Parse(saturdayEnd));

                Dictionary<string, object> res = new Dictionary<string, object>();
                res.Add("state", num);
                return _api.convertToJson(res);
            }
            catch (Exception ex)
            {
                return _api.createExceptionJson(ex);
            }
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string getPageBySlug(string slug)
        {
            try
            {
                Page thisPage = _page.getPageBySlug(slug);
                Dictionary<string, object> res = new Dictionary<string, object>();
                if (thisPage != null)
                {
                    res.Add("state", 1);
                    res.Add("page", thisPage);
                }
                else res.Add("state", 0);

                return _api.convertToJson(res);
            }
            catch (Exception ex)
            {
                return _api.createExceptionJson(ex);
            }
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string getBusinessForCategory(string slug)
        {
            try
            {
                List<Business> businessList = _business.getBusinessForCategory(slug);
                Dictionary<string, object> res = new Dictionary<string, object>();
                if (businessList != null)
                {
                    res.Add("state", 1);
                    res.Add("businessList", businessList);
                }
                else res.Add("state", 0);

                return _api.convertToJson(res);
            }
            catch (Exception ex)
            {
                return _api.createExceptionJson(ex);
            }
        }
    }
}
