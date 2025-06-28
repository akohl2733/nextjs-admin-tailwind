type InfoBannerProps = {
    message: string;
    type?: 'info' | 'success' | 'error';
}

export default function InfoBanner({message, type = 'info'}: InfoBannerProps) {
    const base = 'p-4 rounded mb-4';
    const color = 
        type === 'success'
            ? 'bg-green-100 text-green-800'
            : type === 'error'
            ? 'bg-red-100 text-red-800'
            : 'bg-blue-100 text-blue-800';
    
    return (
        <div className={`${base} ${color}`}>
            {message}
        </div>
    );
}