using System;
using Domain;
using MediatR;
using Presistence;

namespace Application.Activities.Commands;

public class CreateActivity
{
    // using IRequest Interface and returns a string
    public class Command : IRequest<string>
    {
        // THIS is our parameter of Activity
        public required Activity Activity { get; set; }
    }
    // using Handler and inject our db and uses IRequestHandler interace that takes in the command and returns a string. 
    public class Handler(AppDbContext context) : IRequestHandler<Command, string>
    {
        public async Task<string> Handle(Command request, CancellationToken cancellationToken)
        {
            context.Activities.Add(request.Activity);

            await context.SaveChangesAsync(cancellationToken);

            return request.Activity.Id;
        }
    }
}
