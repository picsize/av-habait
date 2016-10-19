using av_habait.App_Code.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using av_habait.api;
using Newtonsoft.Json.Linq;

namespace av_habait.App_Code.BAL
{
    public class Business : User
    {
        private JObject json;


        #region Properties

        public string BusinessName { get; private set; }
        public string Hours { get; private set; }
        public string About { get; private set; }
        #endregion

        public Business()
        {
            //
            // TODO: Add constructor logic here
            //
        }

        public Business(JObject json)
        {
            BusinessName = (string)json["BusinessName"];
            Hours = (string)json["Hours"];
            About = (string)json["About"];
            Email = (string)json["Email"];
            Password = (string)json["Password"];
            FullName = (string)json["FullName"];
            MobileNumber = (string)json["MobileNumber"];
            HomeNumber = (string)json["HomeNumber"];
            Address = (string)json["Address"];
            Avatar = (string)json["Avatar"];
        }

        internal int addBusiness(string email, string password, int userType, string fullName, string mobileNumber,
            string homeNumber, char familyStatus, char gender, string address, DateTime birthday, string image,
            string businessName, DateTime sundayStart, DateTime sundayEnd, DateTime mondayStart, DateTime mondayEnd, DateTime tuesdayStart, DateTime tuesdayEnd,
            DateTime wednesdayStart, DateTime wednesdayEnd, DateTime thursdayStart, DateTime thursdayEnd, DateTime fridayStart, DateTime fridayEnd,
            DateTime saturdayStart, DateTime saturdayEnd)
        {
            return _db.addBusiness(email, password, userType, fullName, mobileNumber,
             homeNumber, familyStatus, gender, address, birthday, image,
             businessName, sundayStart, sundayEnd, mondayStart, mondayEnd, tuesdayStart, tuesdayEnd,
             wednesdayStart, wednesdayEnd, thursdayStart, thursdayEnd, fridayStart, fridayEnd,
             saturdayStart, saturdayEnd);
        }

        internal void addBusiness(Business business)
        {
            _db.addBusiness(business);
        }

        internal List<Business> getBusinessForCategory(string slug)
        {
            List<Business> businessList = _db.getBusinessForCategory(slug);
            return businessList;
        }
    }
}