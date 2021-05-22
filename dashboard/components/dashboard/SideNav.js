import SideNavItem from "./SideNavItem";
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
    <div className="bg-gray-100 shadow w-64 h-screen">
      <ul className="list-reset">
        <div>
          <div className="hover:bg-gray-200 flex items-center p-2 group hover:text-blue-600">
            {/* Menu Icon */}
            <CubeTransparentIcon className="h-5 ml-4 text-blue-600" />
            <div className="flex items-center w-full justify-between">
              <li>
                <a
                  href="#"
                  className="block p-2 text-gray-600 group-hover:text-blue-600"
                >
                  Dashboard
                </a>
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
            items={["Purchase List","Add Purchase","Import Purchase By csv"]}
            title="Purchase"
          />
        </div>
        <div>
          <SideNavItem
            Icon={ShoppingCartIcon}
            ArrowDown={ChevronDownIcon}
            Arrow={ChevronLeftIcon}
            items={["Purchase List","Add Purchase","Import Purchase By csv"]}
            title="Sale"
          />
        </div>

        <div>
          <SideNavItem
            Icon={CashIcon}
            ArrowDown={ChevronDownIcon}
            Arrow={ChevronLeftIcon}
            items={["Purchase List","Add Purchase","Import Purchase By csv"]}
            title="Expense"
          />
        </div>

        <div>
          <SideNavItem
            Icon={ClipboardListIcon}
            ArrowDown={ChevronDownIcon}
            Arrow={ChevronLeftIcon}
            items={["Purchase List","Add Purchase","Import Purchase By csv"]}
            title="Quotation"
          />
        </div>
        <div>
          <SideNavItem
            Icon={ExternalLinkIcon}
            ArrowDown={ChevronDownIcon}
            Arrow={ChevronLeftIcon}
            items={["Purchase List","Add Purchase","Import Purchase By csv"]}
            title="Transfer"
          />
        </div>

        <div>
          <SideNavItem
            Icon={ClipboardCopyIcon}
            ArrowDown={ChevronDownIcon}
            Arrow={ChevronLeftIcon}
            items={["Purchase List","Add Purchase","Import Purchase By csv"]}
            title="Return"
          />
        </div>
        <div>
          <SideNavItem
            Icon={BriefcaseIcon}
            ArrowDown={ChevronDownIcon}
            Arrow={ChevronLeftIcon}
            items={["Purchase List","Add Purchase","Import Purchase By csv"]}
            title="Accounting"
          />
        </div>
        <div>
          <SideNavItem
            Icon={UserGroupIcon}
            ArrowDown={ChevronDownIcon}
            Arrow={ChevronLeftIcon}
            items={["Purchase List","Add Purchase","Import Purchase By csv"]}
            title="HRM"
          />
        </div>
        <div>
          <SideNavItem
            Icon={UserIcon}
            ArrowDown={ChevronDownIcon}
            Arrow={ChevronLeftIcon}
            items={["Purchase List","Add Purchase","Import Purchase By csv"]}
            title="People"
          />
        </div>
        <div>
          <SideNavItem
            Icon={FolderOpenIcon}
            ArrowDown={ChevronDownIcon}
            Arrow={ChevronLeftIcon}
            items={["Purchase List","Add Purchase","Import Purchase By csv"]}
            title="Reports"
          />
        </div>

        <div>
          <SideNavItem
            Icon={CogIcon}
            ArrowDown={ChevronDownIcon}
            Arrow={ChevronLeftIcon}
            items={["Purchase List","Add Purchase","Import Purchase By csv"]}
            title="Settings"
          />
        </div>
      </ul>
    </div>
  );
};

export default SideNav;
