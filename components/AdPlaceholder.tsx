interface AdPlaceholderProps {
  width: string;
  height: string;
  label: string;
  className?: string;
  vertical?: boolean;
}

export default function AdPlaceholder({ width, height, label, className = '', vertical = false }: AdPlaceholderProps) {
  return (
    <div 
      className={`flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 rounded-xl ${className}`} 
      style={{ 
        minHeight: `${height}px`,
        width: vertical ? `${width}px` : '100%',
        maxWidth: vertical ? `${width}px` : '100%'
      }}
    >
      <div className="text-center p-4">
        <div className="text-gray-400 text-xs font-semibold mb-2">{label}</div>
        <div className="text-gray-300 text-[10px]">{width} × {height}</div>
        <div className="mt-2 text-[10px] text-gray-400">AdSense Space</div>
      </div>
    </div>
  );
}
