<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Categories.aspx.cs" Inherits="av_habait.api.Categories" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" DataKeyNames="Id" DataSourceID="categoriesDS" CellPadding="4" ForeColor="#333333" GridLines="None" Width="100%">
            <AlternatingRowStyle BackColor="White"></AlternatingRowStyle>
            <Columns>
                <asp:CommandField ShowEditButton="True" ShowSelectButton="True" ShowDeleteButton="True" ShowInsertButton="True" ButtonType="Button"></asp:CommandField>
                <asp:BoundField DataField="Id" HeaderText="Id" ReadOnly="True" InsertVisible="False" SortExpression="Id"></asp:BoundField>
                <asp:BoundField DataField="ParentId" HeaderText="ParentId" SortExpression="ParentId"></asp:BoundField>
                <asp:BoundField DataField="Name" HeaderText="Name" SortExpression="Name"></asp:BoundField>
                <asp:BoundField DataField="Slug" HeaderText="Slug" SortExpression="Slug"></asp:BoundField>
                <asp:BoundField DataField="ViewOrder" HeaderText="ViewOrder" SortExpression="ViewOrder"></asp:BoundField>
                <asp:CheckBoxField DataField="IsQuickOrder" HeaderText="IsQuickOrder" SortExpression="IsQuickOrder"></asp:CheckBoxField>
                <asp:BoundField DataField="Description" HeaderText="Description" SortExpression="Description"></asp:BoundField>
                <asp:BoundField DataField="Icon" HeaderText="Icon" SortExpression="Icon"></asp:BoundField>
                <asp:BoundField DataField="Image" HeaderText="Image" SortExpression="Image"></asp:BoundField>
                <asp:BoundField DataField="DefaultPrice" HeaderText="DefaultPrice" SortExpression="DefaultPrice"></asp:BoundField>
                <asp:BoundField DataField="QuestionOrder" HeaderText="QuestionOrder" SortExpression="QuestionOrder"></asp:BoundField>
            </Columns>
            <EditRowStyle BackColor="#2461BF"></EditRowStyle>

            <FooterStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White"></FooterStyle>

            <HeaderStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White"></HeaderStyle>

            <PagerStyle HorizontalAlign="Center" BackColor="#2461BF" ForeColor="White"></PagerStyle>

            <RowStyle BackColor="#EFF3FB"></RowStyle>

            <SelectedRowStyle BackColor="#D1DDF1" Font-Bold="True" ForeColor="#333333"></SelectedRowStyle>

            <SortedAscendingCellStyle BackColor="#F5F7FB"></SortedAscendingCellStyle>

            <SortedAscendingHeaderStyle BackColor="#6D95E1"></SortedAscendingHeaderStyle>

            <SortedDescendingCellStyle BackColor="#E9EBEF"></SortedDescendingCellStyle>

            <SortedDescendingHeaderStyle BackColor="#4870BE"></SortedDescendingHeaderStyle>
        </asp:GridView>
        <asp:SqlDataSource runat="server" ID="categoriesDS" ConflictDetection="CompareAllValues" ConnectionString='<%$ ConnectionStrings:avBaitProd %>' DeleteCommand="DELETE FROM [Category] WHERE [Id] = @original_Id AND [ParentId] = @original_ParentId AND [Name] = @original_Name AND [Slug] = @original_Slug AND [ViewOrder] = @original_ViewOrder AND [IsQuickOrder] = @original_IsQuickOrder AND (([Description] = @original_Description) OR ([Description] IS NULL AND @original_Description IS NULL)) AND (([Icon] = @original_Icon) OR ([Icon] IS NULL AND @original_Icon IS NULL)) AND (([Image] = @original_Image) OR ([Image] IS NULL AND @original_Image IS NULL)) AND (([DefaultPrice] = @original_DefaultPrice) OR ([DefaultPrice] IS NULL AND @original_DefaultPrice IS NULL)) AND (([QuestionOrder] = @original_QuestionOrder) OR ([QuestionOrder] IS NULL AND @original_QuestionOrder IS NULL))" InsertCommand="INSERT INTO [Category] ([ParentId], [Name], [Slug], [ViewOrder], [IsQuickOrder], [Description], [Icon], [Image], [DefaultPrice], [QuestionOrder]) VALUES (@ParentId, @Name, @Slug, @ViewOrder, @IsQuickOrder, @Description, @Icon, @Image, @DefaultPrice, @QuestionOrder)" OldValuesParameterFormatString="original_{0}" SelectCommand="SELECT * FROM [Category] ORDER BY [Id]" UpdateCommand="UPDATE [Category] SET [ParentId] = @ParentId, [QuestionOrder] = @QuestionOrder WHERE [Id] = @original_Id">
            <DeleteParameters>
                <asp:Parameter Name="original_Id" Type="Int16"></asp:Parameter>
                <asp:Parameter Name="original_ParentId" Type="Int16"></asp:Parameter>
                <asp:Parameter Name="original_Name" Type="String"></asp:Parameter>
                <asp:Parameter Name="original_Slug" Type="String"></asp:Parameter>
                <asp:Parameter Name="original_ViewOrder" Type="Int32"></asp:Parameter>
                <asp:Parameter Name="original_IsQuickOrder" Type="Boolean"></asp:Parameter>
                <asp:Parameter Name="original_Description" Type="String"></asp:Parameter>
                <asp:Parameter Name="original_Icon" Type="String"></asp:Parameter>
                <asp:Parameter Name="original_Image" Type="String"></asp:Parameter>
                <asp:Parameter Name="original_DefaultPrice" Type="Decimal"></asp:Parameter>
                <asp:Parameter Name="original_QuestionOrder" Type="Int16"></asp:Parameter>
            </DeleteParameters>
            <InsertParameters>
                <asp:Parameter Name="ParentId" Type="Int16"></asp:Parameter>
                <asp:Parameter Name="Name" Type="String"></asp:Parameter>
                <asp:Parameter Name="Slug" Type="String"></asp:Parameter>
                <asp:Parameter Name="ViewOrder" Type="Int32"></asp:Parameter>
                <asp:Parameter Name="IsQuickOrder" Type="Boolean"></asp:Parameter>
                <asp:Parameter Name="Description" Type="String"></asp:Parameter>
                <asp:Parameter Name="Icon" Type="String"></asp:Parameter>
                <asp:Parameter Name="Image" Type="String"></asp:Parameter>
                <asp:Parameter Name="DefaultPrice" Type="Decimal"></asp:Parameter>
                <asp:Parameter Name="QuestionOrder" Type="Int16"></asp:Parameter>
            </InsertParameters>
            <UpdateParameters>
                <asp:Parameter Name="ParentId" Type="Int16"></asp:Parameter>
                <asp:Parameter Name="Name" Type="String"></asp:Parameter>
                <asp:Parameter Name="Slug" Type="String"></asp:Parameter>
                <asp:Parameter Name="ViewOrder" Type="Int32"></asp:Parameter>
                <asp:Parameter Name="IsQuickOrder" Type="Boolean"></asp:Parameter>
                <asp:Parameter Name="Description" Type="String"></asp:Parameter>
                <asp:Parameter Name="Icon" Type="String"></asp:Parameter>
                <asp:Parameter Name="Image" Type="String"></asp:Parameter>
                <asp:Parameter Name="DefaultPrice" Type="Decimal"></asp:Parameter>
                <asp:Parameter Name="QuestionOrder" Type="Int16"></asp:Parameter>
                <asp:Parameter Name="original_Id" Type="Int16"></asp:Parameter>
                <asp:Parameter Name="original_ParentId" Type="Int16"></asp:Parameter>
                <asp:Parameter Name="original_Name" Type="String"></asp:Parameter>
                <asp:Parameter Name="original_Slug" Type="String"></asp:Parameter>
                <asp:Parameter Name="original_ViewOrder" Type="Int32"></asp:Parameter>
                <asp:Parameter Name="original_IsQuickOrder" Type="Boolean"></asp:Parameter>
                <asp:Parameter Name="original_Description" Type="String"></asp:Parameter>
                <asp:Parameter Name="original_Icon" Type="String"></asp:Parameter>
                <asp:Parameter Name="original_Image" Type="String"></asp:Parameter>
                <asp:Parameter Name="original_DefaultPrice" Type="Decimal"></asp:Parameter>
                <asp:Parameter Name="original_QuestionOrder" Type="Int16"></asp:Parameter>
            </UpdateParameters>
        </asp:SqlDataSource>
    </div>
    </form>
</body>
</html>
