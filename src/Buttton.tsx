import React from 'react';
interface ButttonProps {
    color: "red"|"blue"
}

export function Buttton({color}:ButttonProps){
return (
 <div
 style={{
   width: '100px',
   height: '30px',
   backgroundColor: color,
 }} 
 className='w-full h-full flex items-center justify-center'>
Red Button
 </div>
);
}
