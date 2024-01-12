export default function InquiryForm() {
  return (
    <div className="bg-white w-[490px] h-[345px] rounded-md py-3 px-5 z-20">
      <h4 className="Title-H4 Text-dark mt-4">Send quote to suppliers</h4>
      <form className="flex flex-col items-start gap-4">
        <label></label>
        <input type="text" placeholder="What item you need?" />
        <textarea placeholder="Type more details" cols={10} rows={3}></textarea>
        <div className="flex flex-row gap-3">
          <input type="number" name="quantity" placeholder="Quantity" />
          <select name="" id="">
            <option value="pcs">PCs</option>
          </select>
        </div>
        <button className="btn-primary px-4" type="submit">
          Send inquiry
        </button>
      </form>
    </div>
  );
}
