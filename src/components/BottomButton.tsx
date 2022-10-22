import React, { FC } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface BottomButtonProps {
  icon: any;
  title: string;
  color: string;
  handleClick?: () => void;
}

const BottomButton: FC<BottomButtonProps> = (props: BottomButtonProps) => {
  const { icon, title, color, handleClick } = props;

  return (
    <button type="button" className={`btn btn-block no-border ${color}`} onClick={() => handleClick && handleClick()}>
      <FontAwesomeIcon className="mr-2" icon={icon} />
      {title}
    </button>
  )
}

export default BottomButton
