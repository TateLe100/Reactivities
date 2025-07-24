using Microsoft.AspNetCore.Mvc.ModelBinding.Binders;
using Microsoft.EntityFrameworkCore;
using Presistence;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddDbContext<AppDbContext>(opt =>
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});

// allows calls from frontend 
builder.Services.AddCors();

// DONT NEED THIS 
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
// builder.Services.AddOpenApi();

var app = builder.Build();

// also needed
app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod()
    .WithOrigins("http://localhost:3000", "https://localhost:3000"));

// DONT NEED THIS STUFF 
// Configure the HTTP request pipeline.
// if (app.Environment.IsDevelopment())
// {
//     app.MapOpenApi();
// }
// app.UseHttpsRedirection();
// app.UseAuthorization();

app.MapControllers();

// creating service scope 
using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;

try
{
    // get context
    var context = services.GetRequiredService<AppDbContext>();
    // automatically updates database or creates db if needed
    await context.Database.MigrateAsync();

    // call dbInitializer
    await DbInitializer.SeedData(context);
}
catch (Exception ex)
{

    var logger = services.GetRequiredService<ILogger<Program>>();

    logger.LogError(ex, "An error occurred during migration.");
}

app.Run();
