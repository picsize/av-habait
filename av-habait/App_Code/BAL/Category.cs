using av_habait.App_Code.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace av_habait.App_Code.BAL
{
    public class Category
    {
        private readonly DB _db = new DB();

        #region Properties

        public int Id { get; private set; }
        public string Img { get; private set; }
        public string Name { get; private set; }
        public string Type { get; private set; }
        public string Slug { get; private set; }
        public List<SubCategory> SubCategory { get; set; }
        //public List<SubCategory> SubCategory {
        //    get {
        //        return this.subCategory;
        //    } set { this.subCategory = new List<SubCategory>(); } }

        #endregion


        public Category()
        {
            //
            // TODO: Add constructor logic here
            //
        }

        public Category(int id, string name, string img)
        {
            Id = id;
            Name = name;
            Img = img;
        }

        public Category(int id, string name)
        {
            Id = id;
            Name = name;
        }

        internal List<Category> getAll()
        {
            return _db.getAllCategories();
        }

        internal Category getCategoryBySlug(string slug)
        {
            return _db.getCategoryBySlug(slug);
        }
    }
}