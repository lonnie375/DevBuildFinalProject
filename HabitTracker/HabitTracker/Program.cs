using HabitTracker;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
	options.AddPolicy(name: "LocalOriginsPolicy",
		builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()
	);
}
);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// add the Local origins thing 

app.UseCors("LocalOriginsPolicy");


app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

// drop the connection string stuff 

string connstring = app.Configuration.GetConnectionString("db");
DAL.CS = connstring;

app.Run();
