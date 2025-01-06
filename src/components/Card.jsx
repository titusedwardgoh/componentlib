export default function Card({icon, children, ...rest}){

    return (
        <div className="card-container">
          {icon && (
            <span className="card-icon">
              {icon}
            </span>
          )}
          {children}
        </div>
      )

}