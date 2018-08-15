using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace defaultApi.Migrations
{
    public partial class CommentsRemoved : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Comment",
                table: "TodoItems");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Comment",
                table: "TodoItems",
                nullable: true);
        }
    }
}
