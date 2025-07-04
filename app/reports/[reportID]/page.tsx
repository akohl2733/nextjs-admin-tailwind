interface ReportPageProps {
    params: {reportID: string}
}

export default function ReportPage({ params }: ReportPageProps) {
    console.log("params:", params);
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Report ID: {params.reportID}</h1>
            <p>This is a dynamic page for report #{params.reportID}</p>
        </div>
    );
}