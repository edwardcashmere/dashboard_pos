import SideNavItem from "./SideNavItem";
import Link from "next/link"
import {
  ChevronLeftIcon,
  CubeTransparentIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  CashIcon,
  UserIcon,
  ClipboardListIcon,
  FolderOpenIcon,
  CogIcon,
  CreditCardIcon,
  CollectionIcon,
  ExternalLinkIcon,
  BriefcaseIcon,
  ClipboardCopyIcon,
  ChevronDownIcon
} from "@heroicons/react/outline";
const SideNav = () => {
  return (
    <div className="bg-gray-100 w-64 h-screen">
      <ul className="list-reset">
        <div>
          <div className="hover:bg-gray-200 flex items-center p-2 group hover:text-blue-600">
            {/* Menu Icon */}
            <CubeTransparentIcon className="h-5 ml-4 text-blue-600" />
            <div className="flex items-center w-full justify-between">
              <li>
                <Link href="/">
                <a
                  className="block p-2 text-gray-600 group-hover:text-blue-600">
                  Dashboard
                </a>
                </Link>
              </li>
            </div>
          </div>
        </div>
        <div>
          <SideNavItem
            Icon={CollectionIcon}
            ArrowDown={ChevronDownIcon}
            Arrow={ChevronLeftIcon}
            items={[
              "Category",
              "Product List",
              "Add Product",
              "Print Barcode",
              "Adjustment List",
              "Add Adjustment",
              "Stock Count"
            ]}
            title="Product"
          />
        </div>
        <div>
          <SideNavItem
            Icon={CreditCardIcon}
            ArrowDown={ChevronDownIcon}
            Arrow={ChevronLeftIcon}
            items={["Purchase List", "Add Purchase", "Import Purchase By Csv"]}
            title="Purchase"
          />
        </div>
        <div>
          <SideNavItem
            Icon={ShoppingCartIcon}
            ArrowDown={ChevronDownIcon}
            Arrow={ChevronLeftIcon}
            items={[
              "Sale List",
              "POS",
              "Add Sale",
              "Import Sale By csv",
              "Gift Card List",
              "Coupon List",
              "Delivery List"
            ]}
            title="Sale"
          />
        </div>

        <div>
          <SideNavItem
            Icon={CashIcon}
            ArrowDown={ChevronDownIcon}
            Arrow={ChevronLeftIcon}
            items={["Expense Category", "Expense List", "Add Expense"]}
            title="Expense"
          />
        </div>

        <div>
          <SideNavItem
            Icon={ClipboardListIcon}
            ArrowDown={ChevronDownIcon}
            Arrow={ChevronLeftIcon}
            items={["Quotation List", "Add Quotation"]}
            title="Quotation"
          />
        </div>
        <div>
          <SideNavItem
            Icon={ExternalLinkIcon}
            ArrowDown={ChevronDownIcon}
            Arrow={ChevronLeftIcon}
            items={["Transfer List", "Add Transfer", "Import Transfer By Csv"]}
            title="Transfer"
          />
        </div>

        <div>
          <SideNavItem
            Icon={ClipboardCopyIcon}
            ArrowDown={ChevronDownIcon}
            Arrow={ChevronLeftIcon}
            items={["Sale", "Purchase"]}
            title="Return"
          />
        </div>
        <div>
          <SideNavItem
            Icon={BriefcaseIcon}
            ArrowDown={ChevronDownIcon}
            Arrow={ChevronLeftIcon}
            items={[
              "Account List",
              "Add Account",
              "Money Transfer",
              "Balance Sheet",
              "Account Statement"
            ]}
            title="Accounting"
          />
        </div>
        <div>
          <SideNavItem
            Icon={UserGroupIcon}
            ArrowDown={ChevronDownIcon}
            Arrow={ChevronLeftIcon}
            items={[
              "Department",
              "Employee",
              "Attendance",
              "Payroll",
              "Holiday"
            ]}
            title="HRM"
          />
        </div>
        <div>
          <SideNavItem
            Icon={UserIcon}
            ArrowDown={ChevronDownIcon}
            Arrow={ChevronLeftIcon}
            items={[
              "User List",
              "Add User",
              "Customer List",
              "Add Customer",
              "Biller List",
              "Add Biller",
              "Supplier List",
              "Add Supplier"
            ]}
            title="People"
          />
        </div>
        <div>
          <SideNavItem
            Icon={FolderOpenIcon}
            ArrowDown={ChevronDownIcon}
            Arrow={ChevronLeftIcon}
            items={[
              "Summary Report",
              "Best Seller",
              "Product Report",
              "Daily Sale",
              "Monthly Sale",
              "Daily Purchase",
              "Monthly Purchase",
              "Sale Report",
              "Payment Report",
              "Purchase Report",
              "Warehouse Report",
              "Warehouse Stock Chart",
              "Product Quantity Alert",
              "User Report",
              "Customer Report",
              "Supplier Report",
              "Due Report"
            ]}
            title="Reports"
          />
        </div>

        <div>
          <SideNavItem
            Icon={CogIcon}
            ArrowDown={ChevronDownIcon}
            Arrow={ChevronLeftIcon}
            items={[
              "Warehouse",
              "Customer Group",
              "Brand",
              "Unit",
              "Tax",
              "User Profile",
              "Create SMS",
              "Mail Setting",
              "SMS Setting",
              "HRM Setting"
            ]}
            title="Settings"
          />
        </div>
      </ul>
    </div>
  );
};

export default SideNav;
