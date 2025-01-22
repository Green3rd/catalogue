import React from "react";
import { TextInfo } from "shared/Component/TextInfo/TextInfo";
import { AddressFormValues } from "AddressPage/AddressForm/types";
import "./AddressSummary.scss";

interface Props {
  address: AddressFormValues;
}

const AddressSummary: React.FC<Props> = (props) => {
  const { address } = props;
  return (
    <div className="AddressSummary">
      <TextInfo title="ชื่อผู้รับ" text={address.name} />
      <TextInfo title="เบอร์โทร" text={address.number} />
      <TextInfo title="email" text={address.email} />
      <TextInfo
        title="ที่อยู่"
        text={`${address.address}, ${address.subdistrict}, ${address.district}, ${address.province}, ${address.zipCode}`}
      />
      {address.note && <TextInfo title="Note" text={address.note} />}
    </div>
  );
};
AddressSummary.displayName = "AddressSummary";
export { AddressSummary };
