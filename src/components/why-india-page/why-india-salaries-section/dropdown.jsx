
export default function DropdownSalaries({currency,setCurrency}) {
 

  return (
    <select 
    value={currency}
    onChange={(e)=>setCurrency(e.target.value)}
    className='p-2 rounded-md font-primaryMedium'>
    <option value="USD">USD</option>
    <option value="EUR">EUR</option>
    <option value="AUSD">AUSD</option>
    <option value="IND">IND</option>
</select>
  );
} 