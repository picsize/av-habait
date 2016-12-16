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

        public decimal DefaultPrice { get; private set; }
        public decimal AvgPrice { get; private set; }
        public string Description { get; private set; }
        public string Icon { get; private set; }
        public int Id { get; private set; }
        public string Image { get; private set; }
        public bool IsQuickOrder { get; private set; }
        public string Name { get; private set; }
        public int ParentId { get; private set; }
        public string Slug { get; private set; }
        public int ViewOrder { get; private set; }
        public int QuestionORder { get; private set; }
        public List<Category> SubCategories { get; private set; }

        #endregion


        public Category()
        {
            //
            // TODO: Add constructor logic here
            //
        }

        public Category(int id, int parentId, string name, string slug, int viewOrder, bool isQuickOrder, string description, string icon, string image, decimal defaultPrice, decimal avgPrice)
        {
            Id = id;
            ParentId = parentId;
            Name = name;
            Slug = slug;
            ViewOrder = viewOrder;
            IsQuickOrder = isQuickOrder;
            Description = description;
            Icon = icon;
            Image = image;
            DefaultPrice = defaultPrice;
            AvgPrice = avgPrice;
        }


        internal List<Category> getAll()
        {
            return _db.getAllCategories();
        }

        internal Category getCategoryBySlug(string slug)
        {
            return _db.getCategoryBySlug(slug);
        }

        internal void setSubCategories(List<Category> subCategories) {
            this.SubCategories = subCategories;
        }

        internal List<Category> getQuickOrdersCategories()
        {
            return _db.getQuickOrdersCategories();
        }

        internal List<Category> getSubCategoryInfo(string slug)
        {
            return _db.getSubCategoryInfo(slug);
        }

        internal List<Category> getAllCategories()
        {
            return _db.getAllCategories();
        }

        internal Category getCategoryInfo(string slug)
        {
            return _db.getCategoryInfo(slug);
        }

        internal List<Category> search()
        {
            return _db.search();
        }
    }
}