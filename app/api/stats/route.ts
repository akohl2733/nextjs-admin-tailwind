export async function GET() {
    const randomPercent = () => (Math.random() > 0.5 ? "+" : "-") + (Math.random() * 10).toFixed(1) + "%";
    const data = [
        { title: "Occupancy", value: `${Math.floor(Math.random() * 21) + 80}%`, change: randomPercent() },
        { title: "Revenue", value: `${Math.floor(Math.random() * 10000) + 10000}%`, change: randomPercent() },
        { title: "Active Sessions", value: `${Math.floor(Math.random() * 301) + 100}%`, change: randomPercent() }
    ];

    return Response.json(data);
}

export async function POST(req: Request){
    try {
        const body = await req.json();

        if (!body.title || typeof body.value != 'number'){
            return new Response(
                JSON.stringify({status: 'error', message:"Invalid Payout"}),
                {status: 400}
            );
        }

        return Response.json({
            status: 'success',
            received: body
        });
    } catch (err) {
        return new Response(
            JSON.stringify({status: 'error', message: "invalid JSON"}),
            { status: 400 }
        );
    }
}